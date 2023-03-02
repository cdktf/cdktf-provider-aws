# `dataAwsEc2InstanceTypeOfferings` Submodule <a name="`dataAwsEc2InstanceTypeOfferings` Submodule" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2InstanceTypeOfferings <a name="DataAwsEc2InstanceTypeOfferings" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings aws_ec2_instance_type_offerings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_instance_type_offerings.DataAwsEc2InstanceTypeOfferings;

DataAwsEc2InstanceTypeOfferings.Builder.create(Construct scope, java.lang.String id)
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
//  .filter(java.util.List<DataAwsEc2InstanceTypeOfferingsFilter>)
//  .id(java.lang.String)
//  .locationType(java.lang.String)
//  .timeouts(DataAwsEc2InstanceTypeOfferingsTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilter">DataAwsEc2InstanceTypeOfferingsFilter</a>></code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings#id DataAwsEc2InstanceTypeOfferings#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.Initializer.parameter.locationType">locationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings#location_type DataAwsEc2InstanceTypeOfferings#location_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeouts">DataAwsEc2InstanceTypeOfferingsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilter">DataAwsEc2InstanceTypeOfferingsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings#filter DataAwsEc2InstanceTypeOfferings#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings#id DataAwsEc2InstanceTypeOfferings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `locationType`<sup>Optional</sup> <a name="locationType" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.Initializer.parameter.locationType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings#location_type DataAwsEc2InstanceTypeOfferings#location_type}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeouts">DataAwsEc2InstanceTypeOfferingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings#timeouts DataAwsEc2InstanceTypeOfferings#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.resetLocationType">resetLocationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataAwsEc2InstanceTypeOfferingsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilter">DataAwsEc2InstanceTypeOfferingsFilter</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.putTimeouts"></a>

```java
public void putTimeouts(DataAwsEc2InstanceTypeOfferingsTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeouts">DataAwsEc2InstanceTypeOfferingsTimeouts</a>

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.resetId"></a>

```java
public void resetId()
```

##### `resetLocationType` <a name="resetLocationType" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.resetLocationType"></a>

```java
public void resetLocationType()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_instance_type_offerings.DataAwsEc2InstanceTypeOfferings;

DataAwsEc2InstanceTypeOfferings.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_instance_type_offerings.DataAwsEc2InstanceTypeOfferings;

DataAwsEc2InstanceTypeOfferings.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_instance_type_offerings.DataAwsEc2InstanceTypeOfferings;

DataAwsEc2InstanceTypeOfferings.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList">DataAwsEc2InstanceTypeOfferingsFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.instanceTypes">instanceTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.locations">locations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.locationTypes">locationTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference">DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilter">DataAwsEc2InstanceTypeOfferingsFilter</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.locationTypeInput">locationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeouts">DataAwsEc2InstanceTypeOfferingsTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.locationType">locationType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.filter"></a>

```java
public DataAwsEc2InstanceTypeOfferingsFilterList getFilter();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList">DataAwsEc2InstanceTypeOfferingsFilterList</a>

---

##### `instanceTypes`<sup>Required</sup> <a name="instanceTypes" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.instanceTypes"></a>

```java
public java.util.List<java.lang.String> getInstanceTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.locations"></a>

```java
public java.util.List<java.lang.String> getLocations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `locationTypes`<sup>Required</sup> <a name="locationTypes" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.locationTypes"></a>

```java
public java.util.List<java.lang.String> getLocationTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.timeouts"></a>

```java
public DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference">DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilter">DataAwsEc2InstanceTypeOfferingsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationTypeInput`<sup>Optional</sup> <a name="locationTypeInput" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.locationTypeInput"></a>

```java
public java.lang.String getLocationTypeInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeouts">DataAwsEc2InstanceTypeOfferingsTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `locationType`<sup>Required</sup> <a name="locationType" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.locationType"></a>

```java
public java.lang.String getLocationType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferings.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2InstanceTypeOfferingsConfig <a name="DataAwsEc2InstanceTypeOfferingsConfig" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_instance_type_offerings.DataAwsEc2InstanceTypeOfferingsConfig;

DataAwsEc2InstanceTypeOfferingsConfig.builder()
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
//  .filter(java.util.List<DataAwsEc2InstanceTypeOfferingsFilter>)
//  .id(java.lang.String)
//  .locationType(java.lang.String)
//  .timeouts(DataAwsEc2InstanceTypeOfferingsTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilter">DataAwsEc2InstanceTypeOfferingsFilter</a>></code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings#id DataAwsEc2InstanceTypeOfferings#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig.property.locationType">locationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings#location_type DataAwsEc2InstanceTypeOfferings#location_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeouts">DataAwsEc2InstanceTypeOfferingsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilter">DataAwsEc2InstanceTypeOfferingsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings#filter DataAwsEc2InstanceTypeOfferings#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings#id DataAwsEc2InstanceTypeOfferings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `locationType`<sup>Optional</sup> <a name="locationType" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig.property.locationType"></a>

```java
public java.lang.String getLocationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings#location_type DataAwsEc2InstanceTypeOfferings#location_type}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsConfig.property.timeouts"></a>

```java
public DataAwsEc2InstanceTypeOfferingsTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeouts">DataAwsEc2InstanceTypeOfferingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings#timeouts DataAwsEc2InstanceTypeOfferings#timeouts}

---

### DataAwsEc2InstanceTypeOfferingsFilter <a name="DataAwsEc2InstanceTypeOfferingsFilter" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_instance_type_offerings.DataAwsEc2InstanceTypeOfferingsFilter;

DataAwsEc2InstanceTypeOfferingsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings#name DataAwsEc2InstanceTypeOfferings#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings#values DataAwsEc2InstanceTypeOfferings#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings#name DataAwsEc2InstanceTypeOfferings#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings#values DataAwsEc2InstanceTypeOfferings#values}.

---

### DataAwsEc2InstanceTypeOfferingsTimeouts <a name="DataAwsEc2InstanceTypeOfferingsTimeouts" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_instance_type_offerings.DataAwsEc2InstanceTypeOfferingsTimeouts;

DataAwsEc2InstanceTypeOfferingsTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings#read DataAwsEc2InstanceTypeOfferings#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_instance_type_offerings#read DataAwsEc2InstanceTypeOfferings#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2InstanceTypeOfferingsFilterList <a name="DataAwsEc2InstanceTypeOfferingsFilterList" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_instance_type_offerings.DataAwsEc2InstanceTypeOfferingsFilterList;

new DataAwsEc2InstanceTypeOfferingsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList.get"></a>

```java
public DataAwsEc2InstanceTypeOfferingsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilter">DataAwsEc2InstanceTypeOfferingsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilter">DataAwsEc2InstanceTypeOfferingsFilter</a>>

---


### DataAwsEc2InstanceTypeOfferingsFilterOutputReference <a name="DataAwsEc2InstanceTypeOfferingsFilterOutputReference" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_instance_type_offerings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference;

new DataAwsEc2InstanceTypeOfferingsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilter">DataAwsEc2InstanceTypeOfferingsFilter</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsFilter">DataAwsEc2InstanceTypeOfferingsFilter</a> OR com.hashicorp.cdktf.IResolvable

---


### DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference <a name="DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_ec2_instance_type_offerings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference;

new DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeouts">DataAwsEc2InstanceTypeOfferingsTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2InstanceTypeOfferings.DataAwsEc2InstanceTypeOfferingsTimeouts">DataAwsEc2InstanceTypeOfferingsTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



