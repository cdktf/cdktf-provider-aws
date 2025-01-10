# `dataAwsMskBootstrapBrokers` Submodule <a name="`dataAwsMskBootstrapBrokers` Submodule" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsMskBootstrapBrokers <a name="DataAwsMskBootstrapBrokers" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/data-sources/msk_bootstrap_brokers aws_msk_bootstrap_brokers}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_msk_bootstrap_brokers.DataAwsMskBootstrapBrokers;

DataAwsMskBootstrapBrokers.Builder.create(Construct scope, java.lang.String id)
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
    .clusterArn(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.Initializer.parameter.clusterArn">clusterArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/data-sources/msk_bootstrap_brokers#cluster_arn DataAwsMskBootstrapBrokers#cluster_arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/data-sources/msk_bootstrap_brokers#id DataAwsMskBootstrapBrokers#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterArn`<sup>Required</sup> <a name="clusterArn" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.Initializer.parameter.clusterArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/data-sources/msk_bootstrap_brokers#cluster_arn DataAwsMskBootstrapBrokers#cluster_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/data-sources/msk_bootstrap_brokers#id DataAwsMskBootstrapBrokers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsMskBootstrapBrokers resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_msk_bootstrap_brokers.DataAwsMskBootstrapBrokers;

DataAwsMskBootstrapBrokers.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_msk_bootstrap_brokers.DataAwsMskBootstrapBrokers;

DataAwsMskBootstrapBrokers.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_msk_bootstrap_brokers.DataAwsMskBootstrapBrokers;

DataAwsMskBootstrapBrokers.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_msk_bootstrap_brokers.DataAwsMskBootstrapBrokers;

DataAwsMskBootstrapBrokers.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsMskBootstrapBrokers.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataAwsMskBootstrapBrokers resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsMskBootstrapBrokers to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsMskBootstrapBrokers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/data-sources/msk_bootstrap_brokers#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsMskBootstrapBrokers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokers">bootstrapBrokers</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersPublicSaslIam">bootstrapBrokersPublicSaslIam</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersPublicSaslScram">bootstrapBrokersPublicSaslScram</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersPublicTls">bootstrapBrokersPublicTls</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersSaslIam">bootstrapBrokersSaslIam</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersSaslScram">bootstrapBrokersSaslScram</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersTls">bootstrapBrokersTls</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersVpcConnectivitySaslIam">bootstrapBrokersVpcConnectivitySaslIam</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersVpcConnectivitySaslScram">bootstrapBrokersVpcConnectivitySaslScram</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersVpcConnectivityTls">bootstrapBrokersVpcConnectivityTls</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.clusterArnInput">clusterArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.clusterArn">clusterArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `bootstrapBrokers`<sup>Required</sup> <a name="bootstrapBrokers" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokers"></a>

```java
public java.lang.String getBootstrapBrokers();
```

- *Type:* java.lang.String

---

##### `bootstrapBrokersPublicSaslIam`<sup>Required</sup> <a name="bootstrapBrokersPublicSaslIam" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersPublicSaslIam"></a>

```java
public java.lang.String getBootstrapBrokersPublicSaslIam();
```

- *Type:* java.lang.String

---

##### `bootstrapBrokersPublicSaslScram`<sup>Required</sup> <a name="bootstrapBrokersPublicSaslScram" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersPublicSaslScram"></a>

```java
public java.lang.String getBootstrapBrokersPublicSaslScram();
```

- *Type:* java.lang.String

---

##### `bootstrapBrokersPublicTls`<sup>Required</sup> <a name="bootstrapBrokersPublicTls" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersPublicTls"></a>

```java
public java.lang.String getBootstrapBrokersPublicTls();
```

- *Type:* java.lang.String

---

##### `bootstrapBrokersSaslIam`<sup>Required</sup> <a name="bootstrapBrokersSaslIam" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersSaslIam"></a>

```java
public java.lang.String getBootstrapBrokersSaslIam();
```

- *Type:* java.lang.String

---

##### `bootstrapBrokersSaslScram`<sup>Required</sup> <a name="bootstrapBrokersSaslScram" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersSaslScram"></a>

```java
public java.lang.String getBootstrapBrokersSaslScram();
```

- *Type:* java.lang.String

---

##### `bootstrapBrokersTls`<sup>Required</sup> <a name="bootstrapBrokersTls" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersTls"></a>

```java
public java.lang.String getBootstrapBrokersTls();
```

- *Type:* java.lang.String

---

##### `bootstrapBrokersVpcConnectivitySaslIam`<sup>Required</sup> <a name="bootstrapBrokersVpcConnectivitySaslIam" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersVpcConnectivitySaslIam"></a>

```java
public java.lang.String getBootstrapBrokersVpcConnectivitySaslIam();
```

- *Type:* java.lang.String

---

##### `bootstrapBrokersVpcConnectivitySaslScram`<sup>Required</sup> <a name="bootstrapBrokersVpcConnectivitySaslScram" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersVpcConnectivitySaslScram"></a>

```java
public java.lang.String getBootstrapBrokersVpcConnectivitySaslScram();
```

- *Type:* java.lang.String

---

##### `bootstrapBrokersVpcConnectivityTls`<sup>Required</sup> <a name="bootstrapBrokersVpcConnectivityTls" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.bootstrapBrokersVpcConnectivityTls"></a>

```java
public java.lang.String getBootstrapBrokersVpcConnectivityTls();
```

- *Type:* java.lang.String

---

##### `clusterArnInput`<sup>Optional</sup> <a name="clusterArnInput" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.clusterArnInput"></a>

```java
public java.lang.String getClusterArnInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `clusterArn`<sup>Required</sup> <a name="clusterArn" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.clusterArn"></a>

```java
public java.lang.String getClusterArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokers.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsMskBootstrapBrokersConfig <a name="DataAwsMskBootstrapBrokersConfig" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_msk_bootstrap_brokers.DataAwsMskBootstrapBrokersConfig;

DataAwsMskBootstrapBrokersConfig.builder()
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
    .clusterArn(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.clusterArn">clusterArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/data-sources/msk_bootstrap_brokers#cluster_arn DataAwsMskBootstrapBrokers#cluster_arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/data-sources/msk_bootstrap_brokers#id DataAwsMskBootstrapBrokers#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterArn`<sup>Required</sup> <a name="clusterArn" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.clusterArn"></a>

```java
public java.lang.String getClusterArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/data-sources/msk_bootstrap_brokers#cluster_arn DataAwsMskBootstrapBrokers#cluster_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsMskBootstrapBrokers.DataAwsMskBootstrapBrokersConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.83.0/docs/data-sources/msk_bootstrap_brokers#id DataAwsMskBootstrapBrokers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



