# `s3ControlMultiRegionAccessPointPolicy` Submodule <a name="`s3ControlMultiRegionAccessPointPolicy` Submodule" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3ControlMultiRegionAccessPointPolicy <a name="S3ControlMultiRegionAccessPointPolicy" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point_policy aws_s3control_multi_region_access_point_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_control_multi_region_access_point_policy.S3ControlMultiRegionAccessPointPolicy;

S3ControlMultiRegionAccessPointPolicy.Builder.create(Construct scope, java.lang.String id)
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
    .details(S3ControlMultiRegionAccessPointPolicyDetails)
//  .accountId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(S3ControlMultiRegionAccessPointPolicyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.Initializer.parameter.details">details</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetails">S3ControlMultiRegionAccessPointPolicyDetails</a></code> | details block. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point_policy#account_id S3ControlMultiRegionAccessPointPolicy#account_id}. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point_policy#id S3ControlMultiRegionAccessPointPolicy#id}. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeouts">S3ControlMultiRegionAccessPointPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.Initializer.parameter.details"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetails">S3ControlMultiRegionAccessPointPolicyDetails</a>

details block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point_policy#details S3ControlMultiRegionAccessPointPolicy#details}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point_policy#account_id S3ControlMultiRegionAccessPointPolicy#account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point_policy#id S3ControlMultiRegionAccessPointPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeouts">S3ControlMultiRegionAccessPointPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point_policy#timeouts S3ControlMultiRegionAccessPointPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.putDetails">putDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putDetails` <a name="putDetails" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.putDetails"></a>

```java
public void putDetails(S3ControlMultiRegionAccessPointPolicyDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.putDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetails">S3ControlMultiRegionAccessPointPolicyDetails</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.putTimeouts"></a>

```java
public void putTimeouts(S3ControlMultiRegionAccessPointPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeouts">S3ControlMultiRegionAccessPointPolicyTimeouts</a>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_control_multi_region_access_point_policy.S3ControlMultiRegionAccessPointPolicy;

S3ControlMultiRegionAccessPointPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_control_multi_region_access_point_policy.S3ControlMultiRegionAccessPointPolicy;

S3ControlMultiRegionAccessPointPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_control_multi_region_access_point_policy.S3ControlMultiRegionAccessPointPolicy;

S3ControlMultiRegionAccessPointPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.details">details</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference">S3ControlMultiRegionAccessPointPolicyDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.established">established</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.proposed">proposed</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference">S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.detailsInput">detailsInput</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetails">S3ControlMultiRegionAccessPointPolicyDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeouts">S3ControlMultiRegionAccessPointPolicyTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.details"></a>

```java
public S3ControlMultiRegionAccessPointPolicyDetailsOutputReference getDetails();
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference">S3ControlMultiRegionAccessPointPolicyDetailsOutputReference</a>

---

##### `established`<sup>Required</sup> <a name="established" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.established"></a>

```java
public java.lang.String getEstablished();
```

- *Type:* java.lang.String

---

##### `proposed`<sup>Required</sup> <a name="proposed" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.proposed"></a>

```java
public java.lang.String getProposed();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.timeouts"></a>

```java
public S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference">S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `detailsInput`<sup>Optional</sup> <a name="detailsInput" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.detailsInput"></a>

```java
public S3ControlMultiRegionAccessPointPolicyDetails getDetailsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetails">S3ControlMultiRegionAccessPointPolicyDetails</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeouts">S3ControlMultiRegionAccessPointPolicyTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### S3ControlMultiRegionAccessPointPolicyConfig <a name="S3ControlMultiRegionAccessPointPolicyConfig" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_control_multi_region_access_point_policy.S3ControlMultiRegionAccessPointPolicyConfig;

S3ControlMultiRegionAccessPointPolicyConfig.builder()
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
    .details(S3ControlMultiRegionAccessPointPolicyDetails)
//  .accountId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(S3ControlMultiRegionAccessPointPolicyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig.property.details">details</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetails">S3ControlMultiRegionAccessPointPolicyDetails</a></code> | details block. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point_policy#account_id S3ControlMultiRegionAccessPointPolicy#account_id}. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point_policy#id S3ControlMultiRegionAccessPointPolicy#id}. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeouts">S3ControlMultiRegionAccessPointPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig.property.details"></a>

```java
public S3ControlMultiRegionAccessPointPolicyDetails getDetails();
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetails">S3ControlMultiRegionAccessPointPolicyDetails</a>

details block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point_policy#details S3ControlMultiRegionAccessPointPolicy#details}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point_policy#account_id S3ControlMultiRegionAccessPointPolicy#account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point_policy#id S3ControlMultiRegionAccessPointPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig.property.timeouts"></a>

```java
public S3ControlMultiRegionAccessPointPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeouts">S3ControlMultiRegionAccessPointPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point_policy#timeouts S3ControlMultiRegionAccessPointPolicy#timeouts}

---

### S3ControlMultiRegionAccessPointPolicyDetails <a name="S3ControlMultiRegionAccessPointPolicyDetails" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_control_multi_region_access_point_policy.S3ControlMultiRegionAccessPointPolicyDetails;

S3ControlMultiRegionAccessPointPolicyDetails.builder()
    .name(java.lang.String)
    .policy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetails.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point_policy#name S3ControlMultiRegionAccessPointPolicy#name}. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetails.property.policy">policy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point_policy#policy S3ControlMultiRegionAccessPointPolicy#policy}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetails.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point_policy#name S3ControlMultiRegionAccessPointPolicy#name}.

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetails.property.policy"></a>

```java
public java.lang.String getPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point_policy#policy S3ControlMultiRegionAccessPointPolicy#policy}.

---

### S3ControlMultiRegionAccessPointPolicyTimeouts <a name="S3ControlMultiRegionAccessPointPolicyTimeouts" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_control_multi_region_access_point_policy.S3ControlMultiRegionAccessPointPolicyTimeouts;

S3ControlMultiRegionAccessPointPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point_policy#create S3ControlMultiRegionAccessPointPolicy#create}. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point_policy#update S3ControlMultiRegionAccessPointPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point_policy#create S3ControlMultiRegionAccessPointPolicy#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point_policy#update S3ControlMultiRegionAccessPointPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3ControlMultiRegionAccessPointPolicyDetailsOutputReference <a name="S3ControlMultiRegionAccessPointPolicyDetailsOutputReference" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_control_multi_region_access_point_policy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference;

new S3ControlMultiRegionAccessPointPolicyDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.property.policyInput">policyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.property.policy">policy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetails">S3ControlMultiRegionAccessPointPolicyDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.property.policyInput"></a>

```java
public java.lang.String getPolicyInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.property.policy"></a>

```java
public java.lang.String getPolicy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.property.internalValue"></a>

```java
public S3ControlMultiRegionAccessPointPolicyDetails getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetails">S3ControlMultiRegionAccessPointPolicyDetails</a>

---


### S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference <a name="S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.s3_control_multi_region_access_point_policy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference;

new S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeouts">S3ControlMultiRegionAccessPointPolicyTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeouts">S3ControlMultiRegionAccessPointPolicyTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



