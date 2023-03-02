# `s3BucketInventory` Submodule <a name="`s3BucketInventory` Submodule" id="@cdktf/provider-aws.s3BucketInventory"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3BucketInventory <a name="S3BucketInventory" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory aws_s3_bucket_inventory}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_inventory.S3BucketInventory;

S3BucketInventory.Builder.create(Construct scope, java.lang.String id)
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
    .bucket(java.lang.String)
    .destination(S3BucketInventoryDestination)
    .includedObjectVersions(java.lang.String)
    .name(java.lang.String)
    .schedule(S3BucketInventorySchedule)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .filter(S3BucketInventoryFilter)
//  .id(java.lang.String)
//  .optionalFields(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#bucket S3BucketInventory#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.destination">destination</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestination">S3BucketInventoryDestination</a></code> | destination block. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.includedObjectVersions">includedObjectVersions</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#included_object_versions S3BucketInventory#included_object_versions}. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#name S3BucketInventory#name}. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventorySchedule">S3BucketInventorySchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#enabled S3BucketInventory#enabled}. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilter">S3BucketInventoryFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#id S3BucketInventory#id}. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.optionalFields">optionalFields</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#optional_fields S3BucketInventory#optional_fields}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.bucket"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#bucket S3BucketInventory#bucket}.

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.destination"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestination">S3BucketInventoryDestination</a>

destination block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#destination S3BucketInventory#destination}

---

##### `includedObjectVersions`<sup>Required</sup> <a name="includedObjectVersions" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.includedObjectVersions"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#included_object_versions S3BucketInventory#included_object_versions}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#name S3BucketInventory#name}.

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.schedule"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventorySchedule">S3BucketInventorySchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#schedule S3BucketInventory#schedule}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#enabled S3BucketInventory#enabled}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.filter"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilter">S3BucketInventoryFilter</a>

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#filter S3BucketInventory#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#id S3BucketInventory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `optionalFields`<sup>Optional</sup> <a name="optionalFields" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.Initializer.parameter.optionalFields"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#optional_fields S3BucketInventory#optional_fields}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.putDestination">putDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.resetOptionalFields">resetOptionalFields</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putDestination` <a name="putDestination" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.putDestination"></a>

```java
public void putDestination(S3BucketInventoryDestination value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.putDestination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestination">S3BucketInventoryDestination</a>

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.putFilter"></a>

```java
public void putFilter(S3BucketInventoryFilter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilter">S3BucketInventoryFilter</a>

---

##### `putSchedule` <a name="putSchedule" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.putSchedule"></a>

```java
public void putSchedule(S3BucketInventorySchedule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventorySchedule">S3BucketInventorySchedule</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.resetId"></a>

```java
public void resetId()
```

##### `resetOptionalFields` <a name="resetOptionalFields" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.resetOptionalFields"></a>

```java
public void resetOptionalFields()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_inventory.S3BucketInventory;

S3BucketInventory.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_inventory.S3BucketInventory;

S3BucketInventory.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_inventory.S3BucketInventory;

S3BucketInventory.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference">S3BucketInventoryDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference">S3BucketInventoryFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference">S3BucketInventoryScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.destinationInput">destinationInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestination">S3BucketInventoryDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.filterInput">filterInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilter">S3BucketInventoryFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.includedObjectVersionsInput">includedObjectVersionsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.optionalFieldsInput">optionalFieldsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.scheduleInput">scheduleInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventorySchedule">S3BucketInventorySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.includedObjectVersions">includedObjectVersions</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.optionalFields">optionalFields</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.destination"></a>

```java
public S3BucketInventoryDestinationOutputReference getDestination();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference">S3BucketInventoryDestinationOutputReference</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.filter"></a>

```java
public S3BucketInventoryFilterOutputReference getFilter();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference">S3BucketInventoryFilterOutputReference</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.schedule"></a>

```java
public S3BucketInventoryScheduleOutputReference getSchedule();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference">S3BucketInventoryScheduleOutputReference</a>

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.destinationInput"></a>

```java
public S3BucketInventoryDestination getDestinationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestination">S3BucketInventoryDestination</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.filterInput"></a>

```java
public S3BucketInventoryFilter getFilterInput();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilter">S3BucketInventoryFilter</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `includedObjectVersionsInput`<sup>Optional</sup> <a name="includedObjectVersionsInput" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.includedObjectVersionsInput"></a>

```java
public java.lang.String getIncludedObjectVersionsInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `optionalFieldsInput`<sup>Optional</sup> <a name="optionalFieldsInput" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.optionalFieldsInput"></a>

```java
public java.util.List<java.lang.String> getOptionalFieldsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.scheduleInput"></a>

```java
public S3BucketInventorySchedule getScheduleInput();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventorySchedule">S3BucketInventorySchedule</a>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `includedObjectVersions`<sup>Required</sup> <a name="includedObjectVersions" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.includedObjectVersions"></a>

```java
public java.lang.String getIncludedObjectVersions();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `optionalFields`<sup>Required</sup> <a name="optionalFields" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.optionalFields"></a>

```java
public java.util.List<java.lang.String> getOptionalFields();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventory.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### S3BucketInventoryConfig <a name="S3BucketInventoryConfig" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_inventory.S3BucketInventoryConfig;

S3BucketInventoryConfig.builder()
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
    .bucket(java.lang.String)
    .destination(S3BucketInventoryDestination)
    .includedObjectVersions(java.lang.String)
    .name(java.lang.String)
    .schedule(S3BucketInventorySchedule)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .filter(S3BucketInventoryFilter)
//  .id(java.lang.String)
//  .optionalFields(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#bucket S3BucketInventory#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestination">S3BucketInventoryDestination</a></code> | destination block. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.includedObjectVersions">includedObjectVersions</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#included_object_versions S3BucketInventory#included_object_versions}. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#name S3BucketInventory#name}. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventorySchedule">S3BucketInventorySchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#enabled S3BucketInventory#enabled}. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilter">S3BucketInventoryFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#id S3BucketInventory#id}. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.optionalFields">optionalFields</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#optional_fields S3BucketInventory#optional_fields}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#bucket S3BucketInventory#bucket}.

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.destination"></a>

```java
public S3BucketInventoryDestination getDestination();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestination">S3BucketInventoryDestination</a>

destination block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#destination S3BucketInventory#destination}

---

##### `includedObjectVersions`<sup>Required</sup> <a name="includedObjectVersions" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.includedObjectVersions"></a>

```java
public java.lang.String getIncludedObjectVersions();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#included_object_versions S3BucketInventory#included_object_versions}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#name S3BucketInventory#name}.

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.schedule"></a>

```java
public S3BucketInventorySchedule getSchedule();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventorySchedule">S3BucketInventorySchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#schedule S3BucketInventory#schedule}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#enabled S3BucketInventory#enabled}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.filter"></a>

```java
public S3BucketInventoryFilter getFilter();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilter">S3BucketInventoryFilter</a>

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#filter S3BucketInventory#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#id S3BucketInventory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `optionalFields`<sup>Optional</sup> <a name="optionalFields" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryConfig.property.optionalFields"></a>

```java
public java.util.List<java.lang.String> getOptionalFields();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#optional_fields S3BucketInventory#optional_fields}.

---

### S3BucketInventoryDestination <a name="S3BucketInventoryDestination" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestination.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_inventory.S3BucketInventoryDestination;

S3BucketInventoryDestination.builder()
    .bucket(S3BucketInventoryDestinationBucket)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestination.property.bucket">bucket</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket">S3BucketInventoryDestinationBucket</a></code> | bucket block. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestination.property.bucket"></a>

```java
public S3BucketInventoryDestinationBucket getBucket();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket">S3BucketInventoryDestinationBucket</a>

bucket block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#bucket S3BucketInventory#bucket}

---

### S3BucketInventoryDestinationBucket <a name="S3BucketInventoryDestinationBucket" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_inventory.S3BucketInventoryDestinationBucket;

S3BucketInventoryDestinationBucket.builder()
    .bucketArn(java.lang.String)
    .format(java.lang.String)
//  .accountId(java.lang.String)
//  .encryption(S3BucketInventoryDestinationBucketEncryption)
//  .prefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket.property.bucketArn">bucketArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#bucket_arn S3BucketInventory#bucket_arn}. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket.property.format">format</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#format S3BucketInventory#format}. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#account_id S3BucketInventory#account_id}. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket.property.encryption">encryption</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryption">S3BucketInventoryDestinationBucketEncryption</a></code> | encryption block. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket.property.prefix">prefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#prefix S3BucketInventory#prefix}. |

---

##### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket.property.bucketArn"></a>

```java
public java.lang.String getBucketArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#bucket_arn S3BucketInventory#bucket_arn}.

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#format S3BucketInventory#format}.

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#account_id S3BucketInventory#account_id}.

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket.property.encryption"></a>

```java
public S3BucketInventoryDestinationBucketEncryption getEncryption();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryption">S3BucketInventoryDestinationBucketEncryption</a>

encryption block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#encryption S3BucketInventory#encryption}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#prefix S3BucketInventory#prefix}.

---

### S3BucketInventoryDestinationBucketEncryption <a name="S3BucketInventoryDestinationBucketEncryption" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryption.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_inventory.S3BucketInventoryDestinationBucketEncryption;

S3BucketInventoryDestinationBucketEncryption.builder()
//  .sseKms(S3BucketInventoryDestinationBucketEncryptionSseKms)
//  .sseS3(S3BucketInventoryDestinationBucketEncryptionSseS3)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryption.property.sseKms">sseKms</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKms">S3BucketInventoryDestinationBucketEncryptionSseKms</a></code> | sse_kms block. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryption.property.sseS3">sseS3</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3">S3BucketInventoryDestinationBucketEncryptionSseS3</a></code> | sse_s3 block. |

---

##### `sseKms`<sup>Optional</sup> <a name="sseKms" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryption.property.sseKms"></a>

```java
public S3BucketInventoryDestinationBucketEncryptionSseKms getSseKms();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKms">S3BucketInventoryDestinationBucketEncryptionSseKms</a>

sse_kms block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#sse_kms S3BucketInventory#sse_kms}

---

##### `sseS3`<sup>Optional</sup> <a name="sseS3" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryption.property.sseS3"></a>

```java
public S3BucketInventoryDestinationBucketEncryptionSseS3 getSseS3();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3">S3BucketInventoryDestinationBucketEncryptionSseS3</a>

sse_s3 block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#sse_s3 S3BucketInventory#sse_s3}

---

### S3BucketInventoryDestinationBucketEncryptionSseKms <a name="S3BucketInventoryDestinationBucketEncryptionSseKms" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKms.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_inventory.S3BucketInventoryDestinationBucketEncryptionSseKms;

S3BucketInventoryDestinationBucketEncryptionSseKms.builder()
    .keyId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKms.property.keyId">keyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#key_id S3BucketInventory#key_id}. |

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKms.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#key_id S3BucketInventory#key_id}.

---

### S3BucketInventoryDestinationBucketEncryptionSseS3 <a name="S3BucketInventoryDestinationBucketEncryptionSseS3" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_inventory.S3BucketInventoryDestinationBucketEncryptionSseS3;

S3BucketInventoryDestinationBucketEncryptionSseS3.builder()
    .build();
```


### S3BucketInventoryFilter <a name="S3BucketInventoryFilter" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_inventory.S3BucketInventoryFilter;

S3BucketInventoryFilter.builder()
//  .prefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilter.property.prefix">prefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#prefix S3BucketInventory#prefix}. |

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilter.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#prefix S3BucketInventory#prefix}.

---

### S3BucketInventorySchedule <a name="S3BucketInventorySchedule" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventorySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventorySchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_inventory.S3BucketInventorySchedule;

S3BucketInventorySchedule.builder()
    .frequency(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventorySchedule.property.frequency">frequency</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#frequency S3BucketInventory#frequency}. |

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventorySchedule.property.frequency"></a>

```java
public java.lang.String getFrequency();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory#frequency S3BucketInventory#frequency}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3BucketInventoryDestinationBucketEncryptionOutputReference <a name="S3BucketInventoryDestinationBucketEncryptionOutputReference" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_inventory.S3BucketInventoryDestinationBucketEncryptionOutputReference;

new S3BucketInventoryDestinationBucketEncryptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.putSseKms">putSseKms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.putSseS3">putSseS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.resetSseKms">resetSseKms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.resetSseS3">resetSseS3</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSseKms` <a name="putSseKms" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.putSseKms"></a>

```java
public void putSseKms(S3BucketInventoryDestinationBucketEncryptionSseKms value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.putSseKms.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKms">S3BucketInventoryDestinationBucketEncryptionSseKms</a>

---

##### `putSseS3` <a name="putSseS3" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.putSseS3"></a>

```java
public void putSseS3(S3BucketInventoryDestinationBucketEncryptionSseS3 value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.putSseS3.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3">S3BucketInventoryDestinationBucketEncryptionSseS3</a>

---

##### `resetSseKms` <a name="resetSseKms" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.resetSseKms"></a>

```java
public void resetSseKms()
```

##### `resetSseS3` <a name="resetSseS3" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.resetSseS3"></a>

```java
public void resetSseS3()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.property.sseKms">sseKms</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference">S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.property.sseS3">sseS3</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference">S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.property.sseKmsInput">sseKmsInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKms">S3BucketInventoryDestinationBucketEncryptionSseKms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.property.sseS3Input">sseS3Input</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3">S3BucketInventoryDestinationBucketEncryptionSseS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryption">S3BucketInventoryDestinationBucketEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sseKms`<sup>Required</sup> <a name="sseKms" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.property.sseKms"></a>

```java
public S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference getSseKms();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference">S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference</a>

---

##### `sseS3`<sup>Required</sup> <a name="sseS3" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.property.sseS3"></a>

```java
public S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference getSseS3();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference">S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference</a>

---

##### `sseKmsInput`<sup>Optional</sup> <a name="sseKmsInput" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.property.sseKmsInput"></a>

```java
public S3BucketInventoryDestinationBucketEncryptionSseKms getSseKmsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKms">S3BucketInventoryDestinationBucketEncryptionSseKms</a>

---

##### `sseS3Input`<sup>Optional</sup> <a name="sseS3Input" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.property.sseS3Input"></a>

```java
public S3BucketInventoryDestinationBucketEncryptionSseS3 getSseS3Input();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3">S3BucketInventoryDestinationBucketEncryptionSseS3</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference.property.internalValue"></a>

```java
public S3BucketInventoryDestinationBucketEncryption getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryption">S3BucketInventoryDestinationBucketEncryption</a>

---


### S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference <a name="S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_inventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference;

new S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.property.keyIdInput">keyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.property.keyId">keyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKms">S3BucketInventoryDestinationBucketEncryptionSseKms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.property.keyIdInput"></a>

```java
public java.lang.String getKeyIdInput();
```

- *Type:* java.lang.String

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference.property.internalValue"></a>

```java
public S3BucketInventoryDestinationBucketEncryptionSseKms getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseKms">S3BucketInventoryDestinationBucketEncryptionSseKms</a>

---


### S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference <a name="S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_inventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference;

new S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3">S3BucketInventoryDestinationBucketEncryptionSseS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference.property.internalValue"></a>

```java
public S3BucketInventoryDestinationBucketEncryptionSseS3 getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionSseS3">S3BucketInventoryDestinationBucketEncryptionSseS3</a>

---


### S3BucketInventoryDestinationBucketOutputReference <a name="S3BucketInventoryDestinationBucketOutputReference" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_inventory.S3BucketInventoryDestinationBucketOutputReference;

new S3BucketInventoryDestinationBucketOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.putEncryption">putEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.resetEncryption">resetEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEncryption` <a name="putEncryption" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.putEncryption"></a>

```java
public void putEncryption(S3BucketInventoryDestinationBucketEncryption value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.putEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryption">S3BucketInventoryDestinationBucketEncryption</a>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetEncryption` <a name="resetEncryption" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.resetEncryption"></a>

```java
public void resetEncryption()
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.encryption">encryption</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference">S3BucketInventoryDestinationBucketEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.bucketArnInput">bucketArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.encryptionInput">encryptionInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryption">S3BucketInventoryDestinationBucketEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.formatInput">formatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.bucketArn">bucketArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.format">format</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket">S3BucketInventoryDestinationBucket</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.encryption"></a>

```java
public S3BucketInventoryDestinationBucketEncryptionOutputReference getEncryption();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryptionOutputReference">S3BucketInventoryDestinationBucketEncryptionOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `bucketArnInput`<sup>Optional</sup> <a name="bucketArnInput" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.bucketArnInput"></a>

```java
public java.lang.String getBucketArnInput();
```

- *Type:* java.lang.String

---

##### `encryptionInput`<sup>Optional</sup> <a name="encryptionInput" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.encryptionInput"></a>

```java
public S3BucketInventoryDestinationBucketEncryption getEncryptionInput();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketEncryption">S3BucketInventoryDestinationBucketEncryption</a>

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.formatInput"></a>

```java
public java.lang.String getFormatInput();
```

- *Type:* java.lang.String

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.bucketArn"></a>

```java
public java.lang.String getBucketArn();
```

- *Type:* java.lang.String

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference.property.internalValue"></a>

```java
public S3BucketInventoryDestinationBucket getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket">S3BucketInventoryDestinationBucket</a>

---


### S3BucketInventoryDestinationOutputReference <a name="S3BucketInventoryDestinationOutputReference" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_inventory.S3BucketInventoryDestinationOutputReference;

new S3BucketInventoryDestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.putBucket">putBucket</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBucket` <a name="putBucket" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.putBucket"></a>

```java
public void putBucket(S3BucketInventoryDestinationBucket value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.putBucket.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket">S3BucketInventoryDestinationBucket</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.property.bucket">bucket</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference">S3BucketInventoryDestinationBucketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.property.bucketInput">bucketInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket">S3BucketInventoryDestinationBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestination">S3BucketInventoryDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.property.bucket"></a>

```java
public S3BucketInventoryDestinationBucketOutputReference getBucket();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucketOutputReference">S3BucketInventoryDestinationBucketOutputReference</a>

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.property.bucketInput"></a>

```java
public S3BucketInventoryDestinationBucket getBucketInput();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationBucket">S3BucketInventoryDestinationBucket</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestinationOutputReference.property.internalValue"></a>

```java
public S3BucketInventoryDestination getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryDestination">S3BucketInventoryDestination</a>

---


### S3BucketInventoryFilterOutputReference <a name="S3BucketInventoryFilterOutputReference" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_inventory.S3BucketInventoryFilterOutputReference;

new S3BucketInventoryFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilter">S3BucketInventoryFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilterOutputReference.property.internalValue"></a>

```java
public S3BucketInventoryFilter getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryFilter">S3BucketInventoryFilter</a>

---


### S3BucketInventoryScheduleOutputReference <a name="S3BucketInventoryScheduleOutputReference" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_bucket_inventory.S3BucketInventoryScheduleOutputReference;

new S3BucketInventoryScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.property.frequencyInput">frequencyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.property.frequency">frequency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventorySchedule">S3BucketInventorySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `frequencyInput`<sup>Optional</sup> <a name="frequencyInput" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.property.frequencyInput"></a>

```java
public java.lang.String getFrequencyInput();
```

- *Type:* java.lang.String

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.property.frequency"></a>

```java
public java.lang.String getFrequency();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3BucketInventory.S3BucketInventoryScheduleOutputReference.property.internalValue"></a>

```java
public S3BucketInventorySchedule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketInventory.S3BucketInventorySchedule">S3BucketInventorySchedule</a>

---



