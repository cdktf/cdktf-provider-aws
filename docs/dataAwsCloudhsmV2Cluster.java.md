# `dataAwsCloudhsmV2Cluster` Submodule <a name="`dataAwsCloudhsmV2Cluster` Submodule" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsCloudhsmV2Cluster <a name="DataAwsCloudhsmV2Cluster" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudhsm_v2_cluster aws_cloudhsm_v2_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_cloudhsm_v2_cluster.DataAwsCloudhsmV2Cluster;

DataAwsCloudhsmV2Cluster.Builder.create(Construct scope, java.lang.String id)
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
    .clusterId(java.lang.String)
//  .clusterState(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.Initializer.parameter.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudhsm_v2_cluster#cluster_id DataAwsCloudhsmV2Cluster#cluster_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.Initializer.parameter.clusterState">clusterState</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudhsm_v2_cluster#cluster_state DataAwsCloudhsmV2Cluster#cluster_state}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudhsm_v2_cluster#id DataAwsCloudhsmV2Cluster#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.Initializer.parameter.clusterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudhsm_v2_cluster#cluster_id DataAwsCloudhsmV2Cluster#cluster_id}.

---

##### `clusterState`<sup>Optional</sup> <a name="clusterState" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.Initializer.parameter.clusterState"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudhsm_v2_cluster#cluster_state DataAwsCloudhsmV2Cluster#cluster_state}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudhsm_v2_cluster#id DataAwsCloudhsmV2Cluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.resetClusterState">resetClusterState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetClusterState` <a name="resetClusterState" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.resetClusterState"></a>

```java
public void resetClusterState()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_cloudhsm_v2_cluster.DataAwsCloudhsmV2Cluster;

DataAwsCloudhsmV2Cluster.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_cloudhsm_v2_cluster.DataAwsCloudhsmV2Cluster;

DataAwsCloudhsmV2Cluster.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_cloudhsm_v2_cluster.DataAwsCloudhsmV2Cluster;

DataAwsCloudhsmV2Cluster.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.clusterCertificates">clusterCertificates</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList">DataAwsCloudhsmV2ClusterClusterCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.securityGroupId">securityGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.clusterIdInput">clusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.clusterStateInput">clusterStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.clusterState">clusterState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `clusterCertificates`<sup>Required</sup> <a name="clusterCertificates" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.clusterCertificates"></a>

```java
public DataAwsCloudhsmV2ClusterClusterCertificatesList getClusterCertificates();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList">DataAwsCloudhsmV2ClusterClusterCertificatesList</a>

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.securityGroupId"></a>

```java
public java.lang.String getSecurityGroupId();
```

- *Type:* java.lang.String

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.clusterIdInput"></a>

```java
public java.lang.String getClusterIdInput();
```

- *Type:* java.lang.String

---

##### `clusterStateInput`<sup>Optional</sup> <a name="clusterStateInput" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.clusterStateInput"></a>

```java
public java.lang.String getClusterStateInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

---

##### `clusterState`<sup>Required</sup> <a name="clusterState" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.clusterState"></a>

```java
public java.lang.String getClusterState();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2Cluster.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsCloudhsmV2ClusterClusterCertificates <a name="DataAwsCloudhsmV2ClusterClusterCertificates" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificates.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_cloudhsm_v2_cluster.DataAwsCloudhsmV2ClusterClusterCertificates;

DataAwsCloudhsmV2ClusterClusterCertificates.builder()
    .build();
```


### DataAwsCloudhsmV2ClusterConfig <a name="DataAwsCloudhsmV2ClusterConfig" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_cloudhsm_v2_cluster.DataAwsCloudhsmV2ClusterConfig;

DataAwsCloudhsmV2ClusterConfig.builder()
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
    .clusterId(java.lang.String)
//  .clusterState(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudhsm_v2_cluster#cluster_id DataAwsCloudhsmV2Cluster#cluster_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.clusterState">clusterState</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudhsm_v2_cluster#cluster_state DataAwsCloudhsmV2Cluster#cluster_state}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudhsm_v2_cluster#id DataAwsCloudhsmV2Cluster#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudhsm_v2_cluster#cluster_id DataAwsCloudhsmV2Cluster#cluster_id}.

---

##### `clusterState`<sup>Optional</sup> <a name="clusterState" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.clusterState"></a>

```java
public java.lang.String getClusterState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudhsm_v2_cluster#cluster_state DataAwsCloudhsmV2Cluster#cluster_state}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudhsm_v2_cluster#id DataAwsCloudhsmV2Cluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsCloudhsmV2ClusterClusterCertificatesList <a name="DataAwsCloudhsmV2ClusterClusterCertificatesList" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_cloudhsm_v2_cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList;

new DataAwsCloudhsmV2ClusterClusterCertificatesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.get"></a>

```java
public DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference <a name="DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_cloudhsm_v2_cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference;

new DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.property.awsHardwareCertificate">awsHardwareCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.property.clusterCertificate">clusterCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.property.clusterCsr">clusterCsr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.property.hsmCertificate">hsmCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.property.manufacturerHardwareCertificate">manufacturerHardwareCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificates">DataAwsCloudhsmV2ClusterClusterCertificates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsHardwareCertificate`<sup>Required</sup> <a name="awsHardwareCertificate" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.property.awsHardwareCertificate"></a>

```java
public java.lang.String getAwsHardwareCertificate();
```

- *Type:* java.lang.String

---

##### `clusterCertificate`<sup>Required</sup> <a name="clusterCertificate" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.property.clusterCertificate"></a>

```java
public java.lang.String getClusterCertificate();
```

- *Type:* java.lang.String

---

##### `clusterCsr`<sup>Required</sup> <a name="clusterCsr" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.property.clusterCsr"></a>

```java
public java.lang.String getClusterCsr();
```

- *Type:* java.lang.String

---

##### `hsmCertificate`<sup>Required</sup> <a name="hsmCertificate" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.property.hsmCertificate"></a>

```java
public java.lang.String getHsmCertificate();
```

- *Type:* java.lang.String

---

##### `manufacturerHardwareCertificate`<sup>Required</sup> <a name="manufacturerHardwareCertificate" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.property.manufacturerHardwareCertificate"></a>

```java
public java.lang.String getManufacturerHardwareCertificate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificatesOutputReference.property.internalValue"></a>

```java
public DataAwsCloudhsmV2ClusterClusterCertificates getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudhsmV2Cluster.DataAwsCloudhsmV2ClusterClusterCertificates">DataAwsCloudhsmV2ClusterClusterCertificates</a>

---



