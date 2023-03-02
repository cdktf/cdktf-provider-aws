# `dataAwsAvailabilityZone` Submodule <a name="`dataAwsAvailabilityZone` Submodule" id="@cdktf/provider-aws.dataAwsAvailabilityZone"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsAvailabilityZone <a name="DataAwsAvailabilityZone" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/availability_zone aws_availability_zone}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_availability_zone.DataAwsAvailabilityZone;

DataAwsAvailabilityZone.Builder.create(Construct scope, java.lang.String id)
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
//  .allAvailabilityZones(java.lang.Boolean)
//  .allAvailabilityZones(IResolvable)
//  .filter(IResolvable)
//  .filter(java.util.List<DataAwsAvailabilityZoneFilter>)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .state(java.lang.String)
//  .timeouts(DataAwsAvailabilityZoneTimeouts)
//  .zoneId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.Initializer.parameter.allAvailabilityZones">allAvailabilityZones</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zone#all_availability_zones DataAwsAvailabilityZone#all_availability_zones}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilter">DataAwsAvailabilityZoneFilter</a>></code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zone#id DataAwsAvailabilityZone#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zone#name DataAwsAvailabilityZone#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zone#state DataAwsAvailabilityZone#state}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneTimeouts">DataAwsAvailabilityZoneTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zone#zone_id DataAwsAvailabilityZone#zone_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `allAvailabilityZones`<sup>Optional</sup> <a name="allAvailabilityZones" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.Initializer.parameter.allAvailabilityZones"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zone#all_availability_zones DataAwsAvailabilityZone#all_availability_zones}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilter">DataAwsAvailabilityZoneFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zone#filter DataAwsAvailabilityZone#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zone#id DataAwsAvailabilityZone#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zone#name DataAwsAvailabilityZone#name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zone#state DataAwsAvailabilityZone#state}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneTimeouts">DataAwsAvailabilityZoneTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zone#timeouts DataAwsAvailabilityZone#timeouts}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zone#zone_id DataAwsAvailabilityZone#zone_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.resetAllAvailabilityZones">resetAllAvailabilityZones</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.resetZoneId">resetZoneId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataAwsAvailabilityZoneFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilter">DataAwsAvailabilityZoneFilter</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.putTimeouts"></a>

```java
public void putTimeouts(DataAwsAvailabilityZoneTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneTimeouts">DataAwsAvailabilityZoneTimeouts</a>

---

##### `resetAllAvailabilityZones` <a name="resetAllAvailabilityZones" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.resetAllAvailabilityZones"></a>

```java
public void resetAllAvailabilityZones()
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.resetName"></a>

```java
public void resetName()
```

##### `resetState` <a name="resetState" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.resetState"></a>

```java
public void resetState()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetZoneId` <a name="resetZoneId" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.resetZoneId"></a>

```java
public void resetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_availability_zone.DataAwsAvailabilityZone;

DataAwsAvailabilityZone.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_availability_zone.DataAwsAvailabilityZone;

DataAwsAvailabilityZone.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_availability_zone.DataAwsAvailabilityZone;

DataAwsAvailabilityZone.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterList">DataAwsAvailabilityZoneFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.groupName">groupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.nameSuffix">nameSuffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.networkBorderGroup">networkBorderGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.optInStatus">optInStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.parentZoneId">parentZoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.parentZoneName">parentZoneName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneTimeoutsOutputReference">DataAwsAvailabilityZoneTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.zoneType">zoneType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.allAvailabilityZonesInput">allAvailabilityZonesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilter">DataAwsAvailabilityZoneFilter</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneTimeouts">DataAwsAvailabilityZoneTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.allAvailabilityZones">allAvailabilityZones</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.filter"></a>

```java
public DataAwsAvailabilityZoneFilterList getFilter();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterList">DataAwsAvailabilityZoneFilterList</a>

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.groupName"></a>

```java
public java.lang.String getGroupName();
```

- *Type:* java.lang.String

---

##### `nameSuffix`<sup>Required</sup> <a name="nameSuffix" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.nameSuffix"></a>

```java
public java.lang.String getNameSuffix();
```

- *Type:* java.lang.String

---

##### `networkBorderGroup`<sup>Required</sup> <a name="networkBorderGroup" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.networkBorderGroup"></a>

```java
public java.lang.String getNetworkBorderGroup();
```

- *Type:* java.lang.String

---

##### `optInStatus`<sup>Required</sup> <a name="optInStatus" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.optInStatus"></a>

```java
public java.lang.String getOptInStatus();
```

- *Type:* java.lang.String

---

##### `parentZoneId`<sup>Required</sup> <a name="parentZoneId" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.parentZoneId"></a>

```java
public java.lang.String getParentZoneId();
```

- *Type:* java.lang.String

---

##### `parentZoneName`<sup>Required</sup> <a name="parentZoneName" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.parentZoneName"></a>

```java
public java.lang.String getParentZoneName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.timeouts"></a>

```java
public DataAwsAvailabilityZoneTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneTimeoutsOutputReference">DataAwsAvailabilityZoneTimeoutsOutputReference</a>

---

##### `zoneType`<sup>Required</sup> <a name="zoneType" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.zoneType"></a>

```java
public java.lang.String getZoneType();
```

- *Type:* java.lang.String

---

##### `allAvailabilityZonesInput`<sup>Optional</sup> <a name="allAvailabilityZonesInput" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.allAvailabilityZonesInput"></a>

```java
public java.lang.Object getAllAvailabilityZonesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilter">DataAwsAvailabilityZoneFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneTimeouts">DataAwsAvailabilityZoneTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `allAvailabilityZones`<sup>Required</sup> <a name="allAvailabilityZones" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.allAvailabilityZones"></a>

```java
public java.lang.Object getAllAvailabilityZones();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZone.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsAvailabilityZoneConfig <a name="DataAwsAvailabilityZoneConfig" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_availability_zone.DataAwsAvailabilityZoneConfig;

DataAwsAvailabilityZoneConfig.builder()
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
//  .allAvailabilityZones(java.lang.Boolean)
//  .allAvailabilityZones(IResolvable)
//  .filter(IResolvable)
//  .filter(java.util.List<DataAwsAvailabilityZoneFilter>)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .state(java.lang.String)
//  .timeouts(DataAwsAvailabilityZoneTimeouts)
//  .zoneId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneConfig.property.allAvailabilityZones">allAvailabilityZones</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zone#all_availability_zones DataAwsAvailabilityZone#all_availability_zones}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilter">DataAwsAvailabilityZoneFilter</a>></code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zone#id DataAwsAvailabilityZone#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zone#name DataAwsAvailabilityZone#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zone#state DataAwsAvailabilityZone#state}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneTimeouts">DataAwsAvailabilityZoneTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zone#zone_id DataAwsAvailabilityZone#zone_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `allAvailabilityZones`<sup>Optional</sup> <a name="allAvailabilityZones" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneConfig.property.allAvailabilityZones"></a>

```java
public java.lang.Object getAllAvailabilityZones();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zone#all_availability_zones DataAwsAvailabilityZone#all_availability_zones}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilter">DataAwsAvailabilityZoneFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zone#filter DataAwsAvailabilityZone#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zone#id DataAwsAvailabilityZone#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zone#name DataAwsAvailabilityZone#name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zone#state DataAwsAvailabilityZone#state}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneConfig.property.timeouts"></a>

```java
public DataAwsAvailabilityZoneTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneTimeouts">DataAwsAvailabilityZoneTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zone#timeouts DataAwsAvailabilityZone#timeouts}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zone#zone_id DataAwsAvailabilityZone#zone_id}.

---

### DataAwsAvailabilityZoneFilter <a name="DataAwsAvailabilityZoneFilter" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_availability_zone.DataAwsAvailabilityZoneFilter;

DataAwsAvailabilityZoneFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zone#name DataAwsAvailabilityZone#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zone#values DataAwsAvailabilityZone#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zone#name DataAwsAvailabilityZone#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zone#values DataAwsAvailabilityZone#values}.

---

### DataAwsAvailabilityZoneTimeouts <a name="DataAwsAvailabilityZoneTimeouts" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_availability_zone.DataAwsAvailabilityZoneTimeouts;

DataAwsAvailabilityZoneTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zone#read DataAwsAvailabilityZone#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zone#read DataAwsAvailabilityZone#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsAvailabilityZoneFilterList <a name="DataAwsAvailabilityZoneFilterList" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_availability_zone.DataAwsAvailabilityZoneFilterList;

new DataAwsAvailabilityZoneFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterList.get"></a>

```java
public DataAwsAvailabilityZoneFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilter">DataAwsAvailabilityZoneFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilter">DataAwsAvailabilityZoneFilter</a>>

---


### DataAwsAvailabilityZoneFilterOutputReference <a name="DataAwsAvailabilityZoneFilterOutputReference" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_availability_zone.DataAwsAvailabilityZoneFilterOutputReference;

new DataAwsAvailabilityZoneFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilter">DataAwsAvailabilityZoneFilter</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneFilter">DataAwsAvailabilityZoneFilter</a> OR com.hashicorp.cdktf.IResolvable

---


### DataAwsAvailabilityZoneTimeoutsOutputReference <a name="DataAwsAvailabilityZoneTimeoutsOutputReference" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_availability_zone.DataAwsAvailabilityZoneTimeoutsOutputReference;

new DataAwsAvailabilityZoneTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneTimeouts">DataAwsAvailabilityZoneTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAvailabilityZone.DataAwsAvailabilityZoneTimeouts">DataAwsAvailabilityZoneTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



