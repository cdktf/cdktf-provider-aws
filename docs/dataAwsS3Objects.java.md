# `dataAwsS3Objects` Submodule <a name="`dataAwsS3Objects` Submodule" id="@cdktf/provider-aws.dataAwsS3Objects"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsS3Objects <a name="DataAwsS3Objects" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/s3_objects aws_s3_objects}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_s3_objects.DataAwsS3Objects;

DataAwsS3Objects.Builder.create(Construct scope, java.lang.String id)
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
//  .delimiter(java.lang.String)
//  .encodingType(java.lang.String)
//  .fetchOwner(java.lang.Boolean)
//  .fetchOwner(IResolvable)
//  .id(java.lang.String)
//  .maxKeys(java.lang.Number)
//  .prefix(java.lang.String)
//  .startAfter(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.Initializer.parameter.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_objects#bucket DataAwsS3Objects#bucket}. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.Initializer.parameter.delimiter">delimiter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_objects#delimiter DataAwsS3Objects#delimiter}. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.Initializer.parameter.encodingType">encodingType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_objects#encoding_type DataAwsS3Objects#encoding_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.Initializer.parameter.fetchOwner">fetchOwner</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_objects#fetch_owner DataAwsS3Objects#fetch_owner}. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_objects#id DataAwsS3Objects#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.Initializer.parameter.maxKeys">maxKeys</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_objects#max_keys DataAwsS3Objects#max_keys}. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.Initializer.parameter.prefix">prefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_objects#prefix DataAwsS3Objects#prefix}. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.Initializer.parameter.startAfter">startAfter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_objects#start_after DataAwsS3Objects#start_after}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.Initializer.parameter.bucket"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_objects#bucket DataAwsS3Objects#bucket}.

---

##### `delimiter`<sup>Optional</sup> <a name="delimiter" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.Initializer.parameter.delimiter"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_objects#delimiter DataAwsS3Objects#delimiter}.

---

##### `encodingType`<sup>Optional</sup> <a name="encodingType" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.Initializer.parameter.encodingType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_objects#encoding_type DataAwsS3Objects#encoding_type}.

---

##### `fetchOwner`<sup>Optional</sup> <a name="fetchOwner" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.Initializer.parameter.fetchOwner"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_objects#fetch_owner DataAwsS3Objects#fetch_owner}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_objects#id DataAwsS3Objects#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxKeys`<sup>Optional</sup> <a name="maxKeys" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.Initializer.parameter.maxKeys"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_objects#max_keys DataAwsS3Objects#max_keys}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.Initializer.parameter.prefix"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_objects#prefix DataAwsS3Objects#prefix}.

---

##### `startAfter`<sup>Optional</sup> <a name="startAfter" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.Initializer.parameter.startAfter"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_objects#start_after DataAwsS3Objects#start_after}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.resetDelimiter">resetDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.resetEncodingType">resetEncodingType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.resetFetchOwner">resetFetchOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.resetMaxKeys">resetMaxKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.resetPrefix">resetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.resetStartAfter">resetStartAfter</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetDelimiter` <a name="resetDelimiter" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.resetDelimiter"></a>

```java
public void resetDelimiter()
```

##### `resetEncodingType` <a name="resetEncodingType" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.resetEncodingType"></a>

```java
public void resetEncodingType()
```

##### `resetFetchOwner` <a name="resetFetchOwner" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.resetFetchOwner"></a>

```java
public void resetFetchOwner()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.resetId"></a>

```java
public void resetId()
```

##### `resetMaxKeys` <a name="resetMaxKeys" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.resetMaxKeys"></a>

```java
public void resetMaxKeys()
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.resetPrefix"></a>

```java
public void resetPrefix()
```

##### `resetStartAfter` <a name="resetStartAfter" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.resetStartAfter"></a>

```java
public void resetStartAfter()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_s3_objects.DataAwsS3Objects;

DataAwsS3Objects.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_s3_objects.DataAwsS3Objects;

DataAwsS3Objects.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_s3_objects.DataAwsS3Objects;

DataAwsS3Objects.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.property.commonPrefixes">commonPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.property.keys">keys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.property.owners">owners</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.property.delimiterInput">delimiterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.property.encodingTypeInput">encodingTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.property.fetchOwnerInput">fetchOwnerInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.property.maxKeysInput">maxKeysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.property.startAfterInput">startAfterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.property.delimiter">delimiter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.property.encodingType">encodingType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.property.fetchOwner">fetchOwner</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.property.maxKeys">maxKeys</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.property.startAfter">startAfter</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `commonPrefixes`<sup>Required</sup> <a name="commonPrefixes" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.property.commonPrefixes"></a>

```java
public java.util.List<java.lang.String> getCommonPrefixes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `keys`<sup>Required</sup> <a name="keys" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.property.keys"></a>

```java
public java.util.List<java.lang.String> getKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `owners`<sup>Required</sup> <a name="owners" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.property.owners"></a>

```java
public java.util.List<java.lang.String> getOwners();
```

- *Type:* java.util.List<java.lang.String>

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `delimiterInput`<sup>Optional</sup> <a name="delimiterInput" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.property.delimiterInput"></a>

```java
public java.lang.String getDelimiterInput();
```

- *Type:* java.lang.String

---

##### `encodingTypeInput`<sup>Optional</sup> <a name="encodingTypeInput" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.property.encodingTypeInput"></a>

```java
public java.lang.String getEncodingTypeInput();
```

- *Type:* java.lang.String

---

##### `fetchOwnerInput`<sup>Optional</sup> <a name="fetchOwnerInput" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.property.fetchOwnerInput"></a>

```java
public java.lang.Object getFetchOwnerInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `maxKeysInput`<sup>Optional</sup> <a name="maxKeysInput" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.property.maxKeysInput"></a>

```java
public java.lang.Number getMaxKeysInput();
```

- *Type:* java.lang.Number

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `startAfterInput`<sup>Optional</sup> <a name="startAfterInput" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.property.startAfterInput"></a>

```java
public java.lang.String getStartAfterInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `delimiter`<sup>Required</sup> <a name="delimiter" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.property.delimiter"></a>

```java
public java.lang.String getDelimiter();
```

- *Type:* java.lang.String

---

##### `encodingType`<sup>Required</sup> <a name="encodingType" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.property.encodingType"></a>

```java
public java.lang.String getEncodingType();
```

- *Type:* java.lang.String

---

##### `fetchOwner`<sup>Required</sup> <a name="fetchOwner" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.property.fetchOwner"></a>

```java
public java.lang.Object getFetchOwner();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `maxKeys`<sup>Required</sup> <a name="maxKeys" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.property.maxKeys"></a>

```java
public java.lang.Number getMaxKeys();
```

- *Type:* java.lang.Number

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `startAfter`<sup>Required</sup> <a name="startAfter" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.property.startAfter"></a>

```java
public java.lang.String getStartAfter();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3Objects.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsS3ObjectsConfig <a name="DataAwsS3ObjectsConfig" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3ObjectsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3ObjectsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_s3_objects.DataAwsS3ObjectsConfig;

DataAwsS3ObjectsConfig.builder()
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
//  .delimiter(java.lang.String)
//  .encodingType(java.lang.String)
//  .fetchOwner(java.lang.Boolean)
//  .fetchOwner(IResolvable)
//  .id(java.lang.String)
//  .maxKeys(java.lang.Number)
//  .prefix(java.lang.String)
//  .startAfter(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3ObjectsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3ObjectsConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3ObjectsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3ObjectsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3ObjectsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3ObjectsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3ObjectsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3ObjectsConfig.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_objects#bucket DataAwsS3Objects#bucket}. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3ObjectsConfig.property.delimiter">delimiter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_objects#delimiter DataAwsS3Objects#delimiter}. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3ObjectsConfig.property.encodingType">encodingType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_objects#encoding_type DataAwsS3Objects#encoding_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3ObjectsConfig.property.fetchOwner">fetchOwner</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_objects#fetch_owner DataAwsS3Objects#fetch_owner}. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3ObjectsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_objects#id DataAwsS3Objects#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3ObjectsConfig.property.maxKeys">maxKeys</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_objects#max_keys DataAwsS3Objects#max_keys}. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3ObjectsConfig.property.prefix">prefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_objects#prefix DataAwsS3Objects#prefix}. |
| <code><a href="#@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3ObjectsConfig.property.startAfter">startAfter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_objects#start_after DataAwsS3Objects#start_after}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3ObjectsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3ObjectsConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3ObjectsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3ObjectsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3ObjectsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3ObjectsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3ObjectsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3ObjectsConfig.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_objects#bucket DataAwsS3Objects#bucket}.

---

##### `delimiter`<sup>Optional</sup> <a name="delimiter" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3ObjectsConfig.property.delimiter"></a>

```java
public java.lang.String getDelimiter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_objects#delimiter DataAwsS3Objects#delimiter}.

---

##### `encodingType`<sup>Optional</sup> <a name="encodingType" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3ObjectsConfig.property.encodingType"></a>

```java
public java.lang.String getEncodingType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_objects#encoding_type DataAwsS3Objects#encoding_type}.

---

##### `fetchOwner`<sup>Optional</sup> <a name="fetchOwner" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3ObjectsConfig.property.fetchOwner"></a>

```java
public java.lang.Object getFetchOwner();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_objects#fetch_owner DataAwsS3Objects#fetch_owner}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3ObjectsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_objects#id DataAwsS3Objects#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxKeys`<sup>Optional</sup> <a name="maxKeys" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3ObjectsConfig.property.maxKeys"></a>

```java
public java.lang.Number getMaxKeys();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_objects#max_keys DataAwsS3Objects#max_keys}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3ObjectsConfig.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_objects#prefix DataAwsS3Objects#prefix}.

---

##### `startAfter`<sup>Optional</sup> <a name="startAfter" id="@cdktf/provider-aws.dataAwsS3Objects.DataAwsS3ObjectsConfig.property.startAfter"></a>

```java
public java.lang.String getStartAfter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/s3_objects#start_after DataAwsS3Objects#start_after}.

---



