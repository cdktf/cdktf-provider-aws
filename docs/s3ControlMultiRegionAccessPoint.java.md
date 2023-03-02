# `s3ControlMultiRegionAccessPoint` Submodule <a name="`s3ControlMultiRegionAccessPoint` Submodule" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3ControlMultiRegionAccessPoint <a name="S3ControlMultiRegionAccessPoint" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point aws_s3control_multi_region_access_point}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_control_multi_region_access_point.S3ControlMultiRegionAccessPoint;

S3ControlMultiRegionAccessPoint.Builder.create(Construct scope, java.lang.String id)
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
    .details(S3ControlMultiRegionAccessPointDetails)
//  .accountId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(S3ControlMultiRegionAccessPointTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.Initializer.parameter.details">details</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetails">S3ControlMultiRegionAccessPointDetails</a></code> | details block. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#account_id S3ControlMultiRegionAccessPoint#account_id}. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#id S3ControlMultiRegionAccessPoint#id}. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeouts">S3ControlMultiRegionAccessPointTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.Initializer.parameter.details"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetails">S3ControlMultiRegionAccessPointDetails</a>

details block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#details S3ControlMultiRegionAccessPoint#details}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#account_id S3ControlMultiRegionAccessPoint#account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#id S3ControlMultiRegionAccessPoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeouts">S3ControlMultiRegionAccessPointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#timeouts S3ControlMultiRegionAccessPoint#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.putDetails">putDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putDetails` <a name="putDetails" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.putDetails"></a>

```java
public void putDetails(S3ControlMultiRegionAccessPointDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.putDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetails">S3ControlMultiRegionAccessPointDetails</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.putTimeouts"></a>

```java
public void putTimeouts(S3ControlMultiRegionAccessPointTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeouts">S3ControlMultiRegionAccessPointTimeouts</a>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_control_multi_region_access_point.S3ControlMultiRegionAccessPoint;

S3ControlMultiRegionAccessPoint.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_control_multi_region_access_point.S3ControlMultiRegionAccessPoint;

S3ControlMultiRegionAccessPoint.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_control_multi_region_access_point.S3ControlMultiRegionAccessPoint;

S3ControlMultiRegionAccessPoint.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.details">details</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference">S3ControlMultiRegionAccessPointDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference">S3ControlMultiRegionAccessPointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.detailsInput">detailsInput</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetails">S3ControlMultiRegionAccessPointDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeouts">S3ControlMultiRegionAccessPointTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.details"></a>

```java
public S3ControlMultiRegionAccessPointDetailsOutputReference getDetails();
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference">S3ControlMultiRegionAccessPointDetailsOutputReference</a>

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.timeouts"></a>

```java
public S3ControlMultiRegionAccessPointTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference">S3ControlMultiRegionAccessPointTimeoutsOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `detailsInput`<sup>Optional</sup> <a name="detailsInput" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.detailsInput"></a>

```java
public S3ControlMultiRegionAccessPointDetails getDetailsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetails">S3ControlMultiRegionAccessPointDetails</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeouts">S3ControlMultiRegionAccessPointTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPoint.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### S3ControlMultiRegionAccessPointConfig <a name="S3ControlMultiRegionAccessPointConfig" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_control_multi_region_access_point.S3ControlMultiRegionAccessPointConfig;

S3ControlMultiRegionAccessPointConfig.builder()
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
    .details(S3ControlMultiRegionAccessPointDetails)
//  .accountId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(S3ControlMultiRegionAccessPointTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig.property.details">details</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetails">S3ControlMultiRegionAccessPointDetails</a></code> | details block. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#account_id S3ControlMultiRegionAccessPoint#account_id}. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#id S3ControlMultiRegionAccessPoint#id}. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeouts">S3ControlMultiRegionAccessPointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig.property.details"></a>

```java
public S3ControlMultiRegionAccessPointDetails getDetails();
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetails">S3ControlMultiRegionAccessPointDetails</a>

details block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#details S3ControlMultiRegionAccessPoint#details}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#account_id S3ControlMultiRegionAccessPoint#account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#id S3ControlMultiRegionAccessPoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointConfig.property.timeouts"></a>

```java
public S3ControlMultiRegionAccessPointTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeouts">S3ControlMultiRegionAccessPointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#timeouts S3ControlMultiRegionAccessPoint#timeouts}

---

### S3ControlMultiRegionAccessPointDetails <a name="S3ControlMultiRegionAccessPointDetails" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_control_multi_region_access_point.S3ControlMultiRegionAccessPointDetails;

S3ControlMultiRegionAccessPointDetails.builder()
    .name(java.lang.String)
    .region(IResolvable)
    .region(java.util.List<S3ControlMultiRegionAccessPointDetailsRegion>)
//  .publicAccessBlock(S3ControlMultiRegionAccessPointDetailsPublicAccessBlock)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetails.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#name S3ControlMultiRegionAccessPoint#name}. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetails.property.region">region</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegion">S3ControlMultiRegionAccessPointDetailsRegion</a>></code> | region block. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetails.property.publicAccessBlock">publicAccessBlock</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlock">S3ControlMultiRegionAccessPointDetailsPublicAccessBlock</a></code> | public_access_block block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetails.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#name S3ControlMultiRegionAccessPoint#name}.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetails.property.region"></a>

```java
public java.lang.Object getRegion();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegion">S3ControlMultiRegionAccessPointDetailsRegion</a>>

region block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#region S3ControlMultiRegionAccessPoint#region}

---

##### `publicAccessBlock`<sup>Optional</sup> <a name="publicAccessBlock" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetails.property.publicAccessBlock"></a>

```java
public S3ControlMultiRegionAccessPointDetailsPublicAccessBlock getPublicAccessBlock();
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlock">S3ControlMultiRegionAccessPointDetailsPublicAccessBlock</a>

public_access_block block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#public_access_block S3ControlMultiRegionAccessPoint#public_access_block}

---

### S3ControlMultiRegionAccessPointDetailsPublicAccessBlock <a name="S3ControlMultiRegionAccessPointDetailsPublicAccessBlock" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlock"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlock.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_control_multi_region_access_point.S3ControlMultiRegionAccessPointDetailsPublicAccessBlock;

S3ControlMultiRegionAccessPointDetailsPublicAccessBlock.builder()
//  .blockPublicAcls(java.lang.Boolean)
//  .blockPublicAcls(IResolvable)
//  .blockPublicPolicy(java.lang.Boolean)
//  .blockPublicPolicy(IResolvable)
//  .ignorePublicAcls(java.lang.Boolean)
//  .ignorePublicAcls(IResolvable)
//  .restrictPublicBuckets(java.lang.Boolean)
//  .restrictPublicBuckets(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlock.property.blockPublicAcls">blockPublicAcls</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#block_public_acls S3ControlMultiRegionAccessPoint#block_public_acls}. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlock.property.blockPublicPolicy">blockPublicPolicy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#block_public_policy S3ControlMultiRegionAccessPoint#block_public_policy}. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlock.property.ignorePublicAcls">ignorePublicAcls</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#ignore_public_acls S3ControlMultiRegionAccessPoint#ignore_public_acls}. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlock.property.restrictPublicBuckets">restrictPublicBuckets</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#restrict_public_buckets S3ControlMultiRegionAccessPoint#restrict_public_buckets}. |

---

##### `blockPublicAcls`<sup>Optional</sup> <a name="blockPublicAcls" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlock.property.blockPublicAcls"></a>

```java
public java.lang.Object getBlockPublicAcls();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#block_public_acls S3ControlMultiRegionAccessPoint#block_public_acls}.

---

##### `blockPublicPolicy`<sup>Optional</sup> <a name="blockPublicPolicy" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlock.property.blockPublicPolicy"></a>

```java
public java.lang.Object getBlockPublicPolicy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#block_public_policy S3ControlMultiRegionAccessPoint#block_public_policy}.

---

##### `ignorePublicAcls`<sup>Optional</sup> <a name="ignorePublicAcls" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlock.property.ignorePublicAcls"></a>

```java
public java.lang.Object getIgnorePublicAcls();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#ignore_public_acls S3ControlMultiRegionAccessPoint#ignore_public_acls}.

---

##### `restrictPublicBuckets`<sup>Optional</sup> <a name="restrictPublicBuckets" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlock.property.restrictPublicBuckets"></a>

```java
public java.lang.Object getRestrictPublicBuckets();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#restrict_public_buckets S3ControlMultiRegionAccessPoint#restrict_public_buckets}.

---

### S3ControlMultiRegionAccessPointDetailsRegion <a name="S3ControlMultiRegionAccessPointDetailsRegion" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegion.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_control_multi_region_access_point.S3ControlMultiRegionAccessPointDetailsRegion;

S3ControlMultiRegionAccessPointDetailsRegion.builder()
    .bucket(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegion.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#bucket S3ControlMultiRegionAccessPoint#bucket}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegion.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#bucket S3ControlMultiRegionAccessPoint#bucket}.

---

### S3ControlMultiRegionAccessPointTimeouts <a name="S3ControlMultiRegionAccessPointTimeouts" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_control_multi_region_access_point.S3ControlMultiRegionAccessPointTimeouts;

S3ControlMultiRegionAccessPointTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#create S3ControlMultiRegionAccessPoint#create}. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#delete S3ControlMultiRegionAccessPoint#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#create S3ControlMultiRegionAccessPoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point#delete S3ControlMultiRegionAccessPoint#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3ControlMultiRegionAccessPointDetailsOutputReference <a name="S3ControlMultiRegionAccessPointDetailsOutputReference" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_control_multi_region_access_point.S3ControlMultiRegionAccessPointDetailsOutputReference;

new S3ControlMultiRegionAccessPointDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.putPublicAccessBlock">putPublicAccessBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.putRegion">putRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.resetPublicAccessBlock">resetPublicAccessBlock</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPublicAccessBlock` <a name="putPublicAccessBlock" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.putPublicAccessBlock"></a>

```java
public void putPublicAccessBlock(S3ControlMultiRegionAccessPointDetailsPublicAccessBlock value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.putPublicAccessBlock.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlock">S3ControlMultiRegionAccessPointDetailsPublicAccessBlock</a>

---

##### `putRegion` <a name="putRegion" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.putRegion"></a>

```java
public void putRegion(IResolvable OR java.util.List<S3ControlMultiRegionAccessPointDetailsRegion> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.putRegion.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegion">S3ControlMultiRegionAccessPointDetailsRegion</a>>

---

##### `resetPublicAccessBlock` <a name="resetPublicAccessBlock" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.resetPublicAccessBlock"></a>

```java
public void resetPublicAccessBlock()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.property.publicAccessBlock">publicAccessBlock</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference">S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.property.region">region</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList">S3ControlMultiRegionAccessPointDetailsRegionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.property.publicAccessBlockInput">publicAccessBlockInput</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlock">S3ControlMultiRegionAccessPointDetailsPublicAccessBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.property.regionInput">regionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegion">S3ControlMultiRegionAccessPointDetailsRegion</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetails">S3ControlMultiRegionAccessPointDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `publicAccessBlock`<sup>Required</sup> <a name="publicAccessBlock" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.property.publicAccessBlock"></a>

```java
public S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference getPublicAccessBlock();
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference">S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.property.region"></a>

```java
public S3ControlMultiRegionAccessPointDetailsRegionList getRegion();
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList">S3ControlMultiRegionAccessPointDetailsRegionList</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `publicAccessBlockInput`<sup>Optional</sup> <a name="publicAccessBlockInput" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.property.publicAccessBlockInput"></a>

```java
public S3ControlMultiRegionAccessPointDetailsPublicAccessBlock getPublicAccessBlockInput();
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlock">S3ControlMultiRegionAccessPointDetailsPublicAccessBlock</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.property.regionInput"></a>

```java
public java.lang.Object getRegionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegion">S3ControlMultiRegionAccessPointDetailsRegion</a>>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsOutputReference.property.internalValue"></a>

```java
public S3ControlMultiRegionAccessPointDetails getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetails">S3ControlMultiRegionAccessPointDetails</a>

---


### S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference <a name="S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_control_multi_region_access_point.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference;

new S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.resetBlockPublicAcls">resetBlockPublicAcls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.resetBlockPublicPolicy">resetBlockPublicPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.resetIgnorePublicAcls">resetIgnorePublicAcls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.resetRestrictPublicBuckets">resetRestrictPublicBuckets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBlockPublicAcls` <a name="resetBlockPublicAcls" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.resetBlockPublicAcls"></a>

```java
public void resetBlockPublicAcls()
```

##### `resetBlockPublicPolicy` <a name="resetBlockPublicPolicy" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.resetBlockPublicPolicy"></a>

```java
public void resetBlockPublicPolicy()
```

##### `resetIgnorePublicAcls` <a name="resetIgnorePublicAcls" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.resetIgnorePublicAcls"></a>

```java
public void resetIgnorePublicAcls()
```

##### `resetRestrictPublicBuckets` <a name="resetRestrictPublicBuckets" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.resetRestrictPublicBuckets"></a>

```java
public void resetRestrictPublicBuckets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.property.blockPublicAclsInput">blockPublicAclsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.property.blockPublicPolicyInput">blockPublicPolicyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.property.ignorePublicAclsInput">ignorePublicAclsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.property.restrictPublicBucketsInput">restrictPublicBucketsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.property.blockPublicAcls">blockPublicAcls</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.property.blockPublicPolicy">blockPublicPolicy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.property.ignorePublicAcls">ignorePublicAcls</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.property.restrictPublicBuckets">restrictPublicBuckets</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlock">S3ControlMultiRegionAccessPointDetailsPublicAccessBlock</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `blockPublicAclsInput`<sup>Optional</sup> <a name="blockPublicAclsInput" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.property.blockPublicAclsInput"></a>

```java
public java.lang.Object getBlockPublicAclsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `blockPublicPolicyInput`<sup>Optional</sup> <a name="blockPublicPolicyInput" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.property.blockPublicPolicyInput"></a>

```java
public java.lang.Object getBlockPublicPolicyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ignorePublicAclsInput`<sup>Optional</sup> <a name="ignorePublicAclsInput" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.property.ignorePublicAclsInput"></a>

```java
public java.lang.Object getIgnorePublicAclsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `restrictPublicBucketsInput`<sup>Optional</sup> <a name="restrictPublicBucketsInput" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.property.restrictPublicBucketsInput"></a>

```java
public java.lang.Object getRestrictPublicBucketsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `blockPublicAcls`<sup>Required</sup> <a name="blockPublicAcls" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.property.blockPublicAcls"></a>

```java
public java.lang.Object getBlockPublicAcls();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `blockPublicPolicy`<sup>Required</sup> <a name="blockPublicPolicy" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.property.blockPublicPolicy"></a>

```java
public java.lang.Object getBlockPublicPolicy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ignorePublicAcls`<sup>Required</sup> <a name="ignorePublicAcls" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.property.ignorePublicAcls"></a>

```java
public java.lang.Object getIgnorePublicAcls();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `restrictPublicBuckets`<sup>Required</sup> <a name="restrictPublicBuckets" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.property.restrictPublicBuckets"></a>

```java
public java.lang.Object getRestrictPublicBuckets();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference.property.internalValue"></a>

```java
public S3ControlMultiRegionAccessPointDetailsPublicAccessBlock getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsPublicAccessBlock">S3ControlMultiRegionAccessPointDetailsPublicAccessBlock</a>

---


### S3ControlMultiRegionAccessPointDetailsRegionList <a name="S3ControlMultiRegionAccessPointDetailsRegionList" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_control_multi_region_access_point.S3ControlMultiRegionAccessPointDetailsRegionList;

new S3ControlMultiRegionAccessPointDetailsRegionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList.get"></a>

```java
public S3ControlMultiRegionAccessPointDetailsRegionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegion">S3ControlMultiRegionAccessPointDetailsRegion</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegion">S3ControlMultiRegionAccessPointDetailsRegion</a>>

---


### S3ControlMultiRegionAccessPointDetailsRegionOutputReference <a name="S3ControlMultiRegionAccessPointDetailsRegionOutputReference" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_control_multi_region_access_point.S3ControlMultiRegionAccessPointDetailsRegionOutputReference;

new S3ControlMultiRegionAccessPointDetailsRegionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegion">S3ControlMultiRegionAccessPointDetailsRegion</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointDetailsRegion">S3ControlMultiRegionAccessPointDetailsRegion</a> OR com.hashicorp.cdktf.IResolvable

---


### S3ControlMultiRegionAccessPointTimeoutsOutputReference <a name="S3ControlMultiRegionAccessPointTimeoutsOutputReference" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_control_multi_region_access_point.S3ControlMultiRegionAccessPointTimeoutsOutputReference;

new S3ControlMultiRegionAccessPointTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeouts">S3ControlMultiRegionAccessPointTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPoint.S3ControlMultiRegionAccessPointTimeouts">S3ControlMultiRegionAccessPointTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



