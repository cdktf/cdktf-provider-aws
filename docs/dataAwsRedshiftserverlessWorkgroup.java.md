# `data_aws_redshiftserverless_workgroup`

Refer to the Terraform Registory for docs: [`data_aws_redshiftserverless_workgroup`](https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/data-sources/redshiftserverless_workgroup).

# `dataAwsRedshiftserverlessWorkgroup` Submodule <a name="`dataAwsRedshiftserverlessWorkgroup` Submodule" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsRedshiftserverlessWorkgroup <a name="DataAwsRedshiftserverlessWorkgroup" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/data-sources/redshiftserverless_workgroup aws_redshiftserverless_workgroup}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_redshiftserverless_workgroup.DataAwsRedshiftserverlessWorkgroup;

DataAwsRedshiftserverlessWorkgroup.Builder.create(Construct scope, java.lang.String id)
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
    .workgroupName(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.Initializer.parameter.workgroupName">workgroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/data-sources/redshiftserverless_workgroup#workgroup_name DataAwsRedshiftserverlessWorkgroup#workgroup_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/data-sources/redshiftserverless_workgroup#id DataAwsRedshiftserverlessWorkgroup#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `workgroupName`<sup>Required</sup> <a name="workgroupName" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.Initializer.parameter.workgroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/data-sources/redshiftserverless_workgroup#workgroup_name DataAwsRedshiftserverlessWorkgroup#workgroup_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/data-sources/redshiftserverless_workgroup#id DataAwsRedshiftserverlessWorkgroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_redshiftserverless_workgroup.DataAwsRedshiftserverlessWorkgroup;

DataAwsRedshiftserverlessWorkgroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_redshiftserverless_workgroup.DataAwsRedshiftserverlessWorkgroup;

DataAwsRedshiftserverlessWorkgroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_redshiftserverless_workgroup.DataAwsRedshiftserverlessWorkgroup;

DataAwsRedshiftserverlessWorkgroup.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.endpoint">endpoint</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList">DataAwsRedshiftserverlessWorkgroupEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.enhancedVpcRouting">enhancedVpcRouting</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.namespaceName">namespaceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.publiclyAccessible">publiclyAccessible</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.workgroupId">workgroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.workgroupNameInput">workgroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.workgroupName">workgroupName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.endpoint"></a>

```java
public DataAwsRedshiftserverlessWorkgroupEndpointList getEndpoint();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList">DataAwsRedshiftserverlessWorkgroupEndpointList</a>

---

##### `enhancedVpcRouting`<sup>Required</sup> <a name="enhancedVpcRouting" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.enhancedVpcRouting"></a>

```java
public IResolvable getEnhancedVpcRouting();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `namespaceName`<sup>Required</sup> <a name="namespaceName" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.namespaceName"></a>

```java
public java.lang.String getNamespaceName();
```

- *Type:* java.lang.String

---

##### `publiclyAccessible`<sup>Required</sup> <a name="publiclyAccessible" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.publiclyAccessible"></a>

```java
public IResolvable getPubliclyAccessible();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `workgroupId`<sup>Required</sup> <a name="workgroupId" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.workgroupId"></a>

```java
public java.lang.String getWorkgroupId();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `workgroupNameInput`<sup>Optional</sup> <a name="workgroupNameInput" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.workgroupNameInput"></a>

```java
public java.lang.String getWorkgroupNameInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `workgroupName`<sup>Required</sup> <a name="workgroupName" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.workgroupName"></a>

```java
public java.lang.String getWorkgroupName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsRedshiftserverlessWorkgroupConfig <a name="DataAwsRedshiftserverlessWorkgroupConfig" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_redshiftserverless_workgroup.DataAwsRedshiftserverlessWorkgroupConfig;

DataAwsRedshiftserverlessWorkgroupConfig.builder()
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
    .workgroupName(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.workgroupName">workgroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/data-sources/redshiftserverless_workgroup#workgroup_name DataAwsRedshiftserverlessWorkgroup#workgroup_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/data-sources/redshiftserverless_workgroup#id DataAwsRedshiftserverlessWorkgroup#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `workgroupName`<sup>Required</sup> <a name="workgroupName" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.workgroupName"></a>

```java
public java.lang.String getWorkgroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/data-sources/redshiftserverless_workgroup#workgroup_name DataAwsRedshiftserverlessWorkgroup#workgroup_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/data-sources/redshiftserverless_workgroup#id DataAwsRedshiftserverlessWorkgroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsRedshiftserverlessWorkgroupEndpoint <a name="DataAwsRedshiftserverlessWorkgroupEndpoint" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpoint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_redshiftserverless_workgroup.DataAwsRedshiftserverlessWorkgroupEndpoint;

DataAwsRedshiftserverlessWorkgroupEndpoint.builder()
    .build();
```


### DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpoint <a name="DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpoint" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpoint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_redshiftserverless_workgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpoint;

DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpoint.builder()
    .build();
```


### DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterface <a name="DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterface" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterface.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_redshiftserverless_workgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterface;

DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterface.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsRedshiftserverlessWorkgroupEndpointList <a name="DataAwsRedshiftserverlessWorkgroupEndpointList" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_redshiftserverless_workgroup.DataAwsRedshiftserverlessWorkgroupEndpointList;

new DataAwsRedshiftserverlessWorkgroupEndpointList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.get"></a>

```java
public DataAwsRedshiftserverlessWorkgroupEndpointOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsRedshiftserverlessWorkgroupEndpointOutputReference <a name="DataAwsRedshiftserverlessWorkgroupEndpointOutputReference" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_redshiftserverless_workgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference;

new DataAwsRedshiftserverlessWorkgroupEndpointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.property.vpcEndpoint">vpcEndpoint</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList">DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpoint">DataAwsRedshiftserverlessWorkgroupEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `vpcEndpoint`<sup>Required</sup> <a name="vpcEndpoint" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.property.vpcEndpoint"></a>

```java
public DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList getVpcEndpoint();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList">DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointOutputReference.property.internalValue"></a>

```java
public DataAwsRedshiftserverlessWorkgroupEndpoint getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpoint">DataAwsRedshiftserverlessWorkgroupEndpoint</a>

---


### DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList <a name="DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_redshiftserverless_workgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList;

new DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.get"></a>

```java
public DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList <a name="DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_redshiftserverless_workgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList;

new DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.get"></a>

```java
public DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference <a name="DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_redshiftserverless_workgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference;

new DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.property.networkInterfaceId">networkInterfaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.property.privateIpAddress">privateIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterface">DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterface</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.property.networkInterfaceId"></a>

```java
public java.lang.String getNetworkInterfaceId();
```

- *Type:* java.lang.String

---

##### `privateIpAddress`<sup>Required</sup> <a name="privateIpAddress" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.property.privateIpAddress"></a>

```java
public java.lang.String getPrivateIpAddress();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference.property.internalValue"></a>

```java
public DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterface getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterface">DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterface</a>

---


### DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference <a name="DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_redshiftserverless_workgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference;

new DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.property.networkInterface">networkInterface</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList">DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.property.vpcEndpointId">vpcEndpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpoint">DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `networkInterface`<sup>Required</sup> <a name="networkInterface" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.property.networkInterface"></a>

```java
public DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList getNetworkInterface();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList">DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList</a>

---

##### `vpcEndpointId`<sup>Required</sup> <a name="vpcEndpointId" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.property.vpcEndpointId"></a>

```java
public java.lang.String getVpcEndpointId();
```

- *Type:* java.lang.String

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference.property.internalValue"></a>

```java
public DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpoint getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRedshiftserverlessWorkgroup.DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpoint">DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpoint</a>

---



