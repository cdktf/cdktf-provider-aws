# `dataAwsEc2CapacityBlockOffering` Submodule <a name="`dataAwsEc2CapacityBlockOffering` Submodule" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2CapacityBlockOffering <a name="DataAwsEc2CapacityBlockOffering" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/data-sources/ec2_capacity_block_offering aws_ec2_capacity_block_offering}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_capacity_block_offering.DataAwsEc2CapacityBlockOffering;

DataAwsEc2CapacityBlockOffering.Builder.create(Construct scope, java.lang.String id)
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
    .capacityDurationHours(java.lang.Number)
    .instanceCount(java.lang.Number)
    .instanceType(java.lang.String)
//  .endDateRange(java.lang.String)
//  .startDateRange(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.capacityDurationHours">capacityDurationHours</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/data-sources/ec2_capacity_block_offering#capacity_duration_hours DataAwsEc2CapacityBlockOffering#capacity_duration_hours}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.instanceCount">instanceCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/data-sources/ec2_capacity_block_offering#instance_count DataAwsEc2CapacityBlockOffering#instance_count}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.instanceType">instanceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/data-sources/ec2_capacity_block_offering#instance_type DataAwsEc2CapacityBlockOffering#instance_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.endDateRange">endDateRange</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/data-sources/ec2_capacity_block_offering#end_date_range DataAwsEc2CapacityBlockOffering#end_date_range}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.startDateRange">startDateRange</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/data-sources/ec2_capacity_block_offering#start_date_range DataAwsEc2CapacityBlockOffering#start_date_range}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `capacityDurationHours`<sup>Required</sup> <a name="capacityDurationHours" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.capacityDurationHours"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/data-sources/ec2_capacity_block_offering#capacity_duration_hours DataAwsEc2CapacityBlockOffering#capacity_duration_hours}.

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.instanceCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/data-sources/ec2_capacity_block_offering#instance_count DataAwsEc2CapacityBlockOffering#instance_count}.

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.instanceType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/data-sources/ec2_capacity_block_offering#instance_type DataAwsEc2CapacityBlockOffering#instance_type}.

---

##### `endDateRange`<sup>Optional</sup> <a name="endDateRange" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.endDateRange"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/data-sources/ec2_capacity_block_offering#end_date_range DataAwsEc2CapacityBlockOffering#end_date_range}.

---

##### `startDateRange`<sup>Optional</sup> <a name="startDateRange" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.Initializer.parameter.startDateRange"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/data-sources/ec2_capacity_block_offering#start_date_range DataAwsEc2CapacityBlockOffering#start_date_range}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.resetEndDateRange">resetEndDateRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.resetStartDateRange">resetStartDateRange</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetEndDateRange` <a name="resetEndDateRange" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.resetEndDateRange"></a>

```java
public void resetEndDateRange()
```

##### `resetStartDateRange` <a name="resetStartDateRange" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.resetStartDateRange"></a>

```java
public void resetStartDateRange()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsEc2CapacityBlockOffering resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_capacity_block_offering.DataAwsEc2CapacityBlockOffering;

DataAwsEc2CapacityBlockOffering.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_capacity_block_offering.DataAwsEc2CapacityBlockOffering;

DataAwsEc2CapacityBlockOffering.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_capacity_block_offering.DataAwsEc2CapacityBlockOffering;

DataAwsEc2CapacityBlockOffering.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_capacity_block_offering.DataAwsEc2CapacityBlockOffering;

DataAwsEc2CapacityBlockOffering.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsEc2CapacityBlockOffering.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataAwsEc2CapacityBlockOffering resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsEc2CapacityBlockOffering to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsEc2CapacityBlockOffering that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/data-sources/ec2_capacity_block_offering#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsEc2CapacityBlockOffering to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.capacityBlockOfferingId">capacityBlockOfferingId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.currencyCode">currencyCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.tenancy">tenancy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.upfrontFee">upfrontFee</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.capacityDurationHoursInput">capacityDurationHoursInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.endDateRangeInput">endDateRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.instanceCountInput">instanceCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.instanceTypeInput">instanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.startDateRangeInput">startDateRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.capacityDurationHours">capacityDurationHours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.endDateRange">endDateRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.instanceCount">instanceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.startDateRange">startDateRange</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `capacityBlockOfferingId`<sup>Required</sup> <a name="capacityBlockOfferingId" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.capacityBlockOfferingId"></a>

```java
public java.lang.String getCapacityBlockOfferingId();
```

- *Type:* java.lang.String

---

##### `currencyCode`<sup>Required</sup> <a name="currencyCode" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.currencyCode"></a>

```java
public java.lang.String getCurrencyCode();
```

- *Type:* java.lang.String

---

##### `tenancy`<sup>Required</sup> <a name="tenancy" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.tenancy"></a>

```java
public java.lang.String getTenancy();
```

- *Type:* java.lang.String

---

##### `upfrontFee`<sup>Required</sup> <a name="upfrontFee" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.upfrontFee"></a>

```java
public java.lang.String getUpfrontFee();
```

- *Type:* java.lang.String

---

##### `capacityDurationHoursInput`<sup>Optional</sup> <a name="capacityDurationHoursInput" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.capacityDurationHoursInput"></a>

```java
public java.lang.Number getCapacityDurationHoursInput();
```

- *Type:* java.lang.Number

---

##### `endDateRangeInput`<sup>Optional</sup> <a name="endDateRangeInput" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.endDateRangeInput"></a>

```java
public java.lang.String getEndDateRangeInput();
```

- *Type:* java.lang.String

---

##### `instanceCountInput`<sup>Optional</sup> <a name="instanceCountInput" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.instanceCountInput"></a>

```java
public java.lang.Number getInstanceCountInput();
```

- *Type:* java.lang.Number

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.instanceTypeInput"></a>

```java
public java.lang.String getInstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `startDateRangeInput`<sup>Optional</sup> <a name="startDateRangeInput" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.startDateRangeInput"></a>

```java
public java.lang.String getStartDateRangeInput();
```

- *Type:* java.lang.String

---

##### `capacityDurationHours`<sup>Required</sup> <a name="capacityDurationHours" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.capacityDurationHours"></a>

```java
public java.lang.Number getCapacityDurationHours();
```

- *Type:* java.lang.Number

---

##### `endDateRange`<sup>Required</sup> <a name="endDateRange" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.endDateRange"></a>

```java
public java.lang.String getEndDateRange();
```

- *Type:* java.lang.String

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.instanceCount"></a>

```java
public java.lang.Number getInstanceCount();
```

- *Type:* java.lang.Number

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

---

##### `startDateRange`<sup>Required</sup> <a name="startDateRange" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.startDateRange"></a>

```java
public java.lang.String getStartDateRange();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOffering.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2CapacityBlockOfferingConfig <a name="DataAwsEc2CapacityBlockOfferingConfig" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_capacity_block_offering.DataAwsEc2CapacityBlockOfferingConfig;

DataAwsEc2CapacityBlockOfferingConfig.builder()
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
    .capacityDurationHours(java.lang.Number)
    .instanceCount(java.lang.Number)
    .instanceType(java.lang.String)
//  .endDateRange(java.lang.String)
//  .startDateRange(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.capacityDurationHours">capacityDurationHours</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/data-sources/ec2_capacity_block_offering#capacity_duration_hours DataAwsEc2CapacityBlockOffering#capacity_duration_hours}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.instanceCount">instanceCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/data-sources/ec2_capacity_block_offering#instance_count DataAwsEc2CapacityBlockOffering#instance_count}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/data-sources/ec2_capacity_block_offering#instance_type DataAwsEc2CapacityBlockOffering#instance_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.endDateRange">endDateRange</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/data-sources/ec2_capacity_block_offering#end_date_range DataAwsEc2CapacityBlockOffering#end_date_range}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.startDateRange">startDateRange</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/data-sources/ec2_capacity_block_offering#start_date_range DataAwsEc2CapacityBlockOffering#start_date_range}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `capacityDurationHours`<sup>Required</sup> <a name="capacityDurationHours" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.capacityDurationHours"></a>

```java
public java.lang.Number getCapacityDurationHours();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/data-sources/ec2_capacity_block_offering#capacity_duration_hours DataAwsEc2CapacityBlockOffering#capacity_duration_hours}.

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.instanceCount"></a>

```java
public java.lang.Number getInstanceCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/data-sources/ec2_capacity_block_offering#instance_count DataAwsEc2CapacityBlockOffering#instance_count}.

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/data-sources/ec2_capacity_block_offering#instance_type DataAwsEc2CapacityBlockOffering#instance_type}.

---

##### `endDateRange`<sup>Optional</sup> <a name="endDateRange" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.endDateRange"></a>

```java
public java.lang.String getEndDateRange();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/data-sources/ec2_capacity_block_offering#end_date_range DataAwsEc2CapacityBlockOffering#end_date_range}.

---

##### `startDateRange`<sup>Optional</sup> <a name="startDateRange" id="@cdktf/provider-aws.dataAwsEc2CapacityBlockOffering.DataAwsEc2CapacityBlockOfferingConfig.property.startDateRange"></a>

```java
public java.lang.String getStartDateRange();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.58.0/docs/data-sources/ec2_capacity_block_offering#start_date_range DataAwsEc2CapacityBlockOffering#start_date_range}.

---



