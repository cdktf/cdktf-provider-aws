# `dataAwsEc2InstanceTypeOffering` Submodule <a name="`dataAwsEc2InstanceTypeOffering` Submodule" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2InstanceTypeOffering <a name="DataAwsEc2InstanceTypeOffering" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offering aws_ec2_instance_type_offering}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_instance_type_offering.DataAwsEc2InstanceTypeOffering;

DataAwsEc2InstanceTypeOffering.Builder.create(Construct scope, java.lang.String id)
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
//  .filter(IResolvable)
//  .filter(java.util.List<DataAwsEc2InstanceTypeOfferingFilter>)
//  .id(java.lang.String)
//  .locationType(java.lang.String)
//  .preferredInstanceTypes(java.util.List<java.lang.String>)
//  .timeouts(DataAwsEc2InstanceTypeOfferingTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilter">DataAwsEc2InstanceTypeOfferingFilter</a>></code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offering#id DataAwsEc2InstanceTypeOffering#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.Initializer.parameter.locationType">locationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offering#location_type DataAwsEc2InstanceTypeOffering#location_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.Initializer.parameter.preferredInstanceTypes">preferredInstanceTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offering#preferred_instance_types DataAwsEc2InstanceTypeOffering#preferred_instance_types}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeouts">DataAwsEc2InstanceTypeOfferingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilter">DataAwsEc2InstanceTypeOfferingFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offering#filter DataAwsEc2InstanceTypeOffering#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offering#id DataAwsEc2InstanceTypeOffering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `locationType`<sup>Optional</sup> <a name="locationType" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.Initializer.parameter.locationType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offering#location_type DataAwsEc2InstanceTypeOffering#location_type}.

---

##### `preferredInstanceTypes`<sup>Optional</sup> <a name="preferredInstanceTypes" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.Initializer.parameter.preferredInstanceTypes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offering#preferred_instance_types DataAwsEc2InstanceTypeOffering#preferred_instance_types}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeouts">DataAwsEc2InstanceTypeOfferingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offering#timeouts DataAwsEc2InstanceTypeOffering#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.resetLocationType">resetLocationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.resetPreferredInstanceTypes">resetPreferredInstanceTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataAwsEc2InstanceTypeOfferingFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilter">DataAwsEc2InstanceTypeOfferingFilter</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.putTimeouts"></a>

```java
public void putTimeouts(DataAwsEc2InstanceTypeOfferingTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeouts">DataAwsEc2InstanceTypeOfferingTimeouts</a>

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.resetId"></a>

```java
public void resetId()
```

##### `resetLocationType` <a name="resetLocationType" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.resetLocationType"></a>

```java
public void resetLocationType()
```

##### `resetPreferredInstanceTypes` <a name="resetPreferredInstanceTypes" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.resetPreferredInstanceTypes"></a>

```java
public void resetPreferredInstanceTypes()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_instance_type_offering.DataAwsEc2InstanceTypeOffering;

DataAwsEc2InstanceTypeOffering.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_instance_type_offering.DataAwsEc2InstanceTypeOffering;

DataAwsEc2InstanceTypeOffering.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_instance_type_offering.DataAwsEc2InstanceTypeOffering;

DataAwsEc2InstanceTypeOffering.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterList">DataAwsEc2InstanceTypeOfferingFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference">DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilter">DataAwsEc2InstanceTypeOfferingFilter</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.locationTypeInput">locationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.preferredInstanceTypesInput">preferredInstanceTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeouts">DataAwsEc2InstanceTypeOfferingTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.locationType">locationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.preferredInstanceTypes">preferredInstanceTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.filter"></a>

```java
public DataAwsEc2InstanceTypeOfferingFilterList getFilter();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterList">DataAwsEc2InstanceTypeOfferingFilterList</a>

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.timeouts"></a>

```java
public DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference">DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilter">DataAwsEc2InstanceTypeOfferingFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationTypeInput`<sup>Optional</sup> <a name="locationTypeInput" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.locationTypeInput"></a>

```java
public java.lang.String getLocationTypeInput();
```

- *Type:* java.lang.String

---

##### `preferredInstanceTypesInput`<sup>Optional</sup> <a name="preferredInstanceTypesInput" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.preferredInstanceTypesInput"></a>

```java
public java.util.List<java.lang.String> getPreferredInstanceTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeouts">DataAwsEc2InstanceTypeOfferingTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `locationType`<sup>Required</sup> <a name="locationType" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.locationType"></a>

```java
public java.lang.String getLocationType();
```

- *Type:* java.lang.String

---

##### `preferredInstanceTypes`<sup>Required</sup> <a name="preferredInstanceTypes" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.preferredInstanceTypes"></a>

```java
public java.util.List<java.lang.String> getPreferredInstanceTypes();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOffering.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2InstanceTypeOfferingConfig <a name="DataAwsEc2InstanceTypeOfferingConfig" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_instance_type_offering.DataAwsEc2InstanceTypeOfferingConfig;

DataAwsEc2InstanceTypeOfferingConfig.builder()
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
//  .filter(IResolvable)
//  .filter(java.util.List<DataAwsEc2InstanceTypeOfferingFilter>)
//  .id(java.lang.String)
//  .locationType(java.lang.String)
//  .preferredInstanceTypes(java.util.List<java.lang.String>)
//  .timeouts(DataAwsEc2InstanceTypeOfferingTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilter">DataAwsEc2InstanceTypeOfferingFilter</a>></code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offering#id DataAwsEc2InstanceTypeOffering#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingConfig.property.locationType">locationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offering#location_type DataAwsEc2InstanceTypeOffering#location_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingConfig.property.preferredInstanceTypes">preferredInstanceTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offering#preferred_instance_types DataAwsEc2InstanceTypeOffering#preferred_instance_types}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeouts">DataAwsEc2InstanceTypeOfferingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilter">DataAwsEc2InstanceTypeOfferingFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offering#filter DataAwsEc2InstanceTypeOffering#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offering#id DataAwsEc2InstanceTypeOffering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `locationType`<sup>Optional</sup> <a name="locationType" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingConfig.property.locationType"></a>

```java
public java.lang.String getLocationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offering#location_type DataAwsEc2InstanceTypeOffering#location_type}.

---

##### `preferredInstanceTypes`<sup>Optional</sup> <a name="preferredInstanceTypes" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingConfig.property.preferredInstanceTypes"></a>

```java
public java.util.List<java.lang.String> getPreferredInstanceTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offering#preferred_instance_types DataAwsEc2InstanceTypeOffering#preferred_instance_types}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingConfig.property.timeouts"></a>

```java
public DataAwsEc2InstanceTypeOfferingTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeouts">DataAwsEc2InstanceTypeOfferingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offering#timeouts DataAwsEc2InstanceTypeOffering#timeouts}

---

### DataAwsEc2InstanceTypeOfferingFilter <a name="DataAwsEc2InstanceTypeOfferingFilter" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_instance_type_offering.DataAwsEc2InstanceTypeOfferingFilter;

DataAwsEc2InstanceTypeOfferingFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offering#name DataAwsEc2InstanceTypeOffering#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offering#values DataAwsEc2InstanceTypeOffering#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offering#name DataAwsEc2InstanceTypeOffering#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offering#values DataAwsEc2InstanceTypeOffering#values}.

---

### DataAwsEc2InstanceTypeOfferingTimeouts <a name="DataAwsEc2InstanceTypeOfferingTimeouts" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_instance_type_offering.DataAwsEc2InstanceTypeOfferingTimeouts;

DataAwsEc2InstanceTypeOfferingTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offering#read DataAwsEc2InstanceTypeOffering#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offering#read DataAwsEc2InstanceTypeOffering#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2InstanceTypeOfferingFilterList <a name="DataAwsEc2InstanceTypeOfferingFilterList" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_instance_type_offering.DataAwsEc2InstanceTypeOfferingFilterList;

new DataAwsEc2InstanceTypeOfferingFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterList.get"></a>

```java
public DataAwsEc2InstanceTypeOfferingFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilter">DataAwsEc2InstanceTypeOfferingFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilter">DataAwsEc2InstanceTypeOfferingFilter</a>>

---


### DataAwsEc2InstanceTypeOfferingFilterOutputReference <a name="DataAwsEc2InstanceTypeOfferingFilterOutputReference" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_instance_type_offering.DataAwsEc2InstanceTypeOfferingFilterOutputReference;

new DataAwsEc2InstanceTypeOfferingFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilter">DataAwsEc2InstanceTypeOfferingFilter</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingFilter">DataAwsEc2InstanceTypeOfferingFilter</a> OR com.hashicorp.cdktf.IResolvable

---


### DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference <a name="DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_instance_type_offering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference;

new DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeouts">DataAwsEc2InstanceTypeOfferingTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOffering.DataAwsEc2InstanceTypeOfferingTimeouts">DataAwsEc2InstanceTypeOfferingTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



