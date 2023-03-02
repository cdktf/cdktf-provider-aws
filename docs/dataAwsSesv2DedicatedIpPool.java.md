# `dataAwsSesv2DedicatedIpPool` Submodule <a name="`dataAwsSesv2DedicatedIpPool` Submodule" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSesv2DedicatedIpPool <a name="DataAwsSesv2DedicatedIpPool" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/sesv2_dedicated_ip_pool aws_sesv2_dedicated_ip_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_sesv2_dedicated_ip_pool.DataAwsSesv2DedicatedIpPool;

DataAwsSesv2DedicatedIpPool.Builder.create(Construct scope, java.lang.String id)
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
    .poolName(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.Initializer.parameter.poolName">poolName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sesv2_dedicated_ip_pool#pool_name DataAwsSesv2DedicatedIpPool#pool_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sesv2_dedicated_ip_pool#id DataAwsSesv2DedicatedIpPool#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sesv2_dedicated_ip_pool#tags DataAwsSesv2DedicatedIpPool#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `poolName`<sup>Required</sup> <a name="poolName" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.Initializer.parameter.poolName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sesv2_dedicated_ip_pool#pool_name DataAwsSesv2DedicatedIpPool#pool_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sesv2_dedicated_ip_pool#id DataAwsSesv2DedicatedIpPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sesv2_dedicated_ip_pool#tags DataAwsSesv2DedicatedIpPool#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_sesv2_dedicated_ip_pool.DataAwsSesv2DedicatedIpPool;

DataAwsSesv2DedicatedIpPool.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_sesv2_dedicated_ip_pool.DataAwsSesv2DedicatedIpPool;

DataAwsSesv2DedicatedIpPool.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_sesv2_dedicated_ip_pool.DataAwsSesv2DedicatedIpPool;

DataAwsSesv2DedicatedIpPool.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.dedicatedIps">dedicatedIps</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList">DataAwsSesv2DedicatedIpPoolDedicatedIpsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.scalingMode">scalingMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.poolNameInput">poolNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.poolName">poolName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `dedicatedIps`<sup>Required</sup> <a name="dedicatedIps" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.dedicatedIps"></a>

```java
public DataAwsSesv2DedicatedIpPoolDedicatedIpsList getDedicatedIps();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList">DataAwsSesv2DedicatedIpPoolDedicatedIpsList</a>

---

##### `scalingMode`<sup>Required</sup> <a name="scalingMode" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.scalingMode"></a>

```java
public java.lang.String getScalingMode();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `poolNameInput`<sup>Optional</sup> <a name="poolNameInput" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.poolNameInput"></a>

```java
public java.lang.String getPoolNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `poolName`<sup>Required</sup> <a name="poolName" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.poolName"></a>

```java
public java.lang.String getPoolName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPool.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSesv2DedicatedIpPoolConfig <a name="DataAwsSesv2DedicatedIpPoolConfig" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_sesv2_dedicated_ip_pool.DataAwsSesv2DedicatedIpPoolConfig;

DataAwsSesv2DedicatedIpPoolConfig.builder()
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
    .poolName(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolConfig.property.poolName">poolName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sesv2_dedicated_ip_pool#pool_name DataAwsSesv2DedicatedIpPool#pool_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sesv2_dedicated_ip_pool#id DataAwsSesv2DedicatedIpPool#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sesv2_dedicated_ip_pool#tags DataAwsSesv2DedicatedIpPool#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `poolName`<sup>Required</sup> <a name="poolName" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolConfig.property.poolName"></a>

```java
public java.lang.String getPoolName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sesv2_dedicated_ip_pool#pool_name DataAwsSesv2DedicatedIpPool#pool_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sesv2_dedicated_ip_pool#id DataAwsSesv2DedicatedIpPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sesv2_dedicated_ip_pool#tags DataAwsSesv2DedicatedIpPool#tags}.

---

### DataAwsSesv2DedicatedIpPoolDedicatedIps <a name="DataAwsSesv2DedicatedIpPoolDedicatedIps" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIps.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_sesv2_dedicated_ip_pool.DataAwsSesv2DedicatedIpPoolDedicatedIps;

DataAwsSesv2DedicatedIpPoolDedicatedIps.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsSesv2DedicatedIpPoolDedicatedIpsList <a name="DataAwsSesv2DedicatedIpPoolDedicatedIpsList" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_sesv2_dedicated_ip_pool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList;

new DataAwsSesv2DedicatedIpPoolDedicatedIpsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList.get"></a>

```java
public DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference <a name="DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_sesv2_dedicated_ip_pool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference;

new DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.property.ip">ip</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.property.warmupPercentage">warmupPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.property.warmupStatus">warmupStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIps">DataAwsSesv2DedicatedIpPoolDedicatedIps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.property.ip"></a>

```java
public java.lang.String getIp();
```

- *Type:* java.lang.String

---

##### `warmupPercentage`<sup>Required</sup> <a name="warmupPercentage" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.property.warmupPercentage"></a>

```java
public java.lang.Number getWarmupPercentage();
```

- *Type:* java.lang.Number

---

##### `warmupStatus`<sup>Required</sup> <a name="warmupStatus" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.property.warmupStatus"></a>

```java
public java.lang.String getWarmupStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference.property.internalValue"></a>

```java
public DataAwsSesv2DedicatedIpPoolDedicatedIps getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSesv2DedicatedIpPool.DataAwsSesv2DedicatedIpPoolDedicatedIps">DataAwsSesv2DedicatedIpPoolDedicatedIps</a>

---



