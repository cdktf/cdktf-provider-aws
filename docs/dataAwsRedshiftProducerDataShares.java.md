# `dataAwsRedshiftProducerDataShares` Submodule <a name="`dataAwsRedshiftProducerDataShares` Submodule" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsRedshiftProducerDataShares <a name="DataAwsRedshiftProducerDataShares" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/redshift_producer_data_shares aws_redshift_producer_data_shares}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_redshift_producer_data_shares.DataAwsRedshiftProducerDataShares;

DataAwsRedshiftProducerDataShares.Builder.create(Construct scope, java.lang.String id)
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
    .producerArn(java.lang.String)
//  .region(java.lang.String)
//  .status(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.Initializer.parameter.producerArn">producerArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/redshift_producer_data_shares#producer_arn DataAwsRedshiftProducerDataShares#producer_arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/redshift_producer_data_shares#status DataAwsRedshiftProducerDataShares#status}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `producerArn`<sup>Required</sup> <a name="producerArn" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.Initializer.parameter.producerArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/redshift_producer_data_shares#producer_arn DataAwsRedshiftProducerDataShares#producer_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/redshift_producer_data_shares#region DataAwsRedshiftProducerDataShares#region}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/redshift_producer_data_shares#status DataAwsRedshiftProducerDataShares#status}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.resetStatus"></a>

```java
public void resetStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsRedshiftProducerDataShares resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_redshift_producer_data_shares.DataAwsRedshiftProducerDataShares;

DataAwsRedshiftProducerDataShares.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_redshift_producer_data_shares.DataAwsRedshiftProducerDataShares;

DataAwsRedshiftProducerDataShares.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_redshift_producer_data_shares.DataAwsRedshiftProducerDataShares;

DataAwsRedshiftProducerDataShares.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_redshift_producer_data_shares.DataAwsRedshiftProducerDataShares;

DataAwsRedshiftProducerDataShares.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsRedshiftProducerDataShares.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataAwsRedshiftProducerDataShares resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsRedshiftProducerDataShares to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsRedshiftProducerDataShares that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/redshift_producer_data_shares#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsRedshiftProducerDataShares to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.dataShares">dataShares</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList">DataAwsRedshiftProducerDataSharesDataSharesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.producerArnInput">producerArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.producerArn">producerArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `dataShares`<sup>Required</sup> <a name="dataShares" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.dataShares"></a>

```java
public DataAwsRedshiftProducerDataSharesDataSharesList getDataShares();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList">DataAwsRedshiftProducerDataSharesDataSharesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `producerArnInput`<sup>Optional</sup> <a name="producerArnInput" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.producerArnInput"></a>

```java
public java.lang.String getProducerArnInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `producerArn`<sup>Required</sup> <a name="producerArn" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.producerArn"></a>

```java
public java.lang.String getProducerArn();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsRedshiftProducerDataSharesConfig <a name="DataAwsRedshiftProducerDataSharesConfig" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_redshift_producer_data_shares.DataAwsRedshiftProducerDataSharesConfig;

DataAwsRedshiftProducerDataSharesConfig.builder()
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
    .producerArn(java.lang.String)
//  .region(java.lang.String)
//  .status(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.producerArn">producerArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/redshift_producer_data_shares#producer_arn DataAwsRedshiftProducerDataShares#producer_arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/redshift_producer_data_shares#status DataAwsRedshiftProducerDataShares#status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `producerArn`<sup>Required</sup> <a name="producerArn" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.producerArn"></a>

```java
public java.lang.String getProducerArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/redshift_producer_data_shares#producer_arn DataAwsRedshiftProducerDataShares#producer_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/redshift_producer_data_shares#region DataAwsRedshiftProducerDataShares#region}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/redshift_producer_data_shares#status DataAwsRedshiftProducerDataShares#status}.

---

### DataAwsRedshiftProducerDataSharesDataShares <a name="DataAwsRedshiftProducerDataSharesDataShares" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataShares"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataShares.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_redshift_producer_data_shares.DataAwsRedshiftProducerDataSharesDataShares;

DataAwsRedshiftProducerDataSharesDataShares.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsRedshiftProducerDataSharesDataSharesList <a name="DataAwsRedshiftProducerDataSharesDataSharesList" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_redshift_producer_data_shares.DataAwsRedshiftProducerDataSharesDataSharesList;

new DataAwsRedshiftProducerDataSharesDataSharesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.get"></a>

```java
public DataAwsRedshiftProducerDataSharesDataSharesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsRedshiftProducerDataSharesDataSharesOutputReference <a name="DataAwsRedshiftProducerDataSharesDataSharesOutputReference" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_redshift_producer_data_shares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference;

new DataAwsRedshiftProducerDataSharesDataSharesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.property.dataShareArn">dataShareArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.property.managedBy">managedBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.property.producerArn">producerArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataShares">DataAwsRedshiftProducerDataSharesDataShares</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataShareArn`<sup>Required</sup> <a name="dataShareArn" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.property.dataShareArn"></a>

```java
public java.lang.String getDataShareArn();
```

- *Type:* java.lang.String

---

##### `managedBy`<sup>Required</sup> <a name="managedBy" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.property.managedBy"></a>

```java
public java.lang.String getManagedBy();
```

- *Type:* java.lang.String

---

##### `producerArn`<sup>Required</sup> <a name="producerArn" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.property.producerArn"></a>

```java
public java.lang.String getProducerArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.property.internalValue"></a>

```java
public DataAwsRedshiftProducerDataSharesDataShares getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataShares">DataAwsRedshiftProducerDataSharesDataShares</a>

---



