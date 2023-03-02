# `dataAwsRdsReservedInstanceOffering` Submodule <a name="`dataAwsRdsReservedInstanceOffering` Submodule" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsRdsReservedInstanceOffering <a name="DataAwsRdsReservedInstanceOffering" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering aws_rds_reserved_instance_offering}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_rds_reserved_instance_offering.DataAwsRdsReservedInstanceOffering;

DataAwsRdsReservedInstanceOffering.Builder.create(Construct scope, java.lang.String id)
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
    .dbInstanceClass(java.lang.String)
    .duration(java.lang.Number)
    .multiAz(java.lang.Boolean)
    .multiAz(IResolvable)
    .offeringType(java.lang.String)
    .productDescription(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.dbInstanceClass">dbInstanceClass</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#db_instance_class DataAwsRdsReservedInstanceOffering#db_instance_class}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.duration">duration</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#duration DataAwsRdsReservedInstanceOffering#duration}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.multiAz">multiAz</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#multi_az DataAwsRdsReservedInstanceOffering#multi_az}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.offeringType">offeringType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#offering_type DataAwsRdsReservedInstanceOffering#offering_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.productDescription">productDescription</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#product_description DataAwsRdsReservedInstanceOffering#product_description}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#id DataAwsRdsReservedInstanceOffering#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dbInstanceClass`<sup>Required</sup> <a name="dbInstanceClass" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.dbInstanceClass"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#db_instance_class DataAwsRdsReservedInstanceOffering#db_instance_class}.

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.duration"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#duration DataAwsRdsReservedInstanceOffering#duration}.

---

##### `multiAz`<sup>Required</sup> <a name="multiAz" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.multiAz"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#multi_az DataAwsRdsReservedInstanceOffering#multi_az}.

---

##### `offeringType`<sup>Required</sup> <a name="offeringType" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.offeringType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#offering_type DataAwsRdsReservedInstanceOffering#offering_type}.

---

##### `productDescription`<sup>Required</sup> <a name="productDescription" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.productDescription"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#product_description DataAwsRdsReservedInstanceOffering#product_description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#id DataAwsRdsReservedInstanceOffering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_rds_reserved_instance_offering.DataAwsRdsReservedInstanceOffering;

DataAwsRdsReservedInstanceOffering.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_rds_reserved_instance_offering.DataAwsRdsReservedInstanceOffering;

DataAwsRdsReservedInstanceOffering.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_rds_reserved_instance_offering.DataAwsRdsReservedInstanceOffering;

DataAwsRdsReservedInstanceOffering.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.currencyCode">currencyCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.fixedPrice">fixedPrice</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.offeringId">offeringId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.dbInstanceClassInput">dbInstanceClassInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.durationInput">durationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.multiAzInput">multiAzInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.offeringTypeInput">offeringTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.productDescriptionInput">productDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.dbInstanceClass">dbInstanceClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.duration">duration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.multiAz">multiAz</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.offeringType">offeringType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.productDescription">productDescription</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `currencyCode`<sup>Required</sup> <a name="currencyCode" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.currencyCode"></a>

```java
public java.lang.String getCurrencyCode();
```

- *Type:* java.lang.String

---

##### `fixedPrice`<sup>Required</sup> <a name="fixedPrice" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.fixedPrice"></a>

```java
public java.lang.Number getFixedPrice();
```

- *Type:* java.lang.Number

---

##### `offeringId`<sup>Required</sup> <a name="offeringId" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.offeringId"></a>

```java
public java.lang.String getOfferingId();
```

- *Type:* java.lang.String

---

##### `dbInstanceClassInput`<sup>Optional</sup> <a name="dbInstanceClassInput" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.dbInstanceClassInput"></a>

```java
public java.lang.String getDbInstanceClassInput();
```

- *Type:* java.lang.String

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.durationInput"></a>

```java
public java.lang.Number getDurationInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `multiAzInput`<sup>Optional</sup> <a name="multiAzInput" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.multiAzInput"></a>

```java
public java.lang.Object getMultiAzInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `offeringTypeInput`<sup>Optional</sup> <a name="offeringTypeInput" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.offeringTypeInput"></a>

```java
public java.lang.String getOfferingTypeInput();
```

- *Type:* java.lang.String

---

##### `productDescriptionInput`<sup>Optional</sup> <a name="productDescriptionInput" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.productDescriptionInput"></a>

```java
public java.lang.String getProductDescriptionInput();
```

- *Type:* java.lang.String

---

##### `dbInstanceClass`<sup>Required</sup> <a name="dbInstanceClass" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.dbInstanceClass"></a>

```java
public java.lang.String getDbInstanceClass();
```

- *Type:* java.lang.String

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.duration"></a>

```java
public java.lang.Number getDuration();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `multiAz`<sup>Required</sup> <a name="multiAz" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.multiAz"></a>

```java
public java.lang.Object getMultiAz();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `offeringType`<sup>Required</sup> <a name="offeringType" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.offeringType"></a>

```java
public java.lang.String getOfferingType();
```

- *Type:* java.lang.String

---

##### `productDescription`<sup>Required</sup> <a name="productDescription" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.productDescription"></a>

```java
public java.lang.String getProductDescription();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOffering.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsRdsReservedInstanceOfferingConfig <a name="DataAwsRdsReservedInstanceOfferingConfig" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_rds_reserved_instance_offering.DataAwsRdsReservedInstanceOfferingConfig;

DataAwsRdsReservedInstanceOfferingConfig.builder()
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
    .dbInstanceClass(java.lang.String)
    .duration(java.lang.Number)
    .multiAz(java.lang.Boolean)
    .multiAz(IResolvable)
    .offeringType(java.lang.String)
    .productDescription(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.dbInstanceClass">dbInstanceClass</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#db_instance_class DataAwsRdsReservedInstanceOffering#db_instance_class}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.duration">duration</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#duration DataAwsRdsReservedInstanceOffering#duration}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.multiAz">multiAz</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#multi_az DataAwsRdsReservedInstanceOffering#multi_az}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.offeringType">offeringType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#offering_type DataAwsRdsReservedInstanceOffering#offering_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.productDescription">productDescription</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#product_description DataAwsRdsReservedInstanceOffering#product_description}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#id DataAwsRdsReservedInstanceOffering#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dbInstanceClass`<sup>Required</sup> <a name="dbInstanceClass" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.dbInstanceClass"></a>

```java
public java.lang.String getDbInstanceClass();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#db_instance_class DataAwsRdsReservedInstanceOffering#db_instance_class}.

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.duration"></a>

```java
public java.lang.Number getDuration();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#duration DataAwsRdsReservedInstanceOffering#duration}.

---

##### `multiAz`<sup>Required</sup> <a name="multiAz" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.multiAz"></a>

```java
public java.lang.Object getMultiAz();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#multi_az DataAwsRdsReservedInstanceOffering#multi_az}.

---

##### `offeringType`<sup>Required</sup> <a name="offeringType" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.offeringType"></a>

```java
public java.lang.String getOfferingType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#offering_type DataAwsRdsReservedInstanceOffering#offering_type}.

---

##### `productDescription`<sup>Required</sup> <a name="productDescription" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.productDescription"></a>

```java
public java.lang.String getProductDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#product_description DataAwsRdsReservedInstanceOffering#product_description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRdsReservedInstanceOffering.DataAwsRdsReservedInstanceOfferingConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_reserved_instance_offering#id DataAwsRdsReservedInstanceOffering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



