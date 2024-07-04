# `dataAwsResourceexplorer2Search` Submodule <a name="`dataAwsResourceexplorer2Search` Submodule" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsResourceexplorer2Search <a name="DataAwsResourceexplorer2Search" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/data-sources/resourceexplorer2_search aws_resourceexplorer2_search}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_resourceexplorer2_search.DataAwsResourceexplorer2Search;

DataAwsResourceexplorer2Search.Builder.create(Construct scope, java.lang.String id)
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
    .queryString(java.lang.String)
//  .viewArn(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.Initializer.parameter.queryString">queryString</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/data-sources/resourceexplorer2_search#query_string DataAwsResourceexplorer2Search#query_string}. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.Initializer.parameter.viewArn">viewArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/data-sources/resourceexplorer2_search#view_arn DataAwsResourceexplorer2Search#view_arn}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `queryString`<sup>Required</sup> <a name="queryString" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.Initializer.parameter.queryString"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/data-sources/resourceexplorer2_search#query_string DataAwsResourceexplorer2Search#query_string}.

---

##### `viewArn`<sup>Optional</sup> <a name="viewArn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.Initializer.parameter.viewArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/data-sources/resourceexplorer2_search#view_arn DataAwsResourceexplorer2Search#view_arn}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.resetViewArn">resetViewArn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetViewArn` <a name="resetViewArn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.resetViewArn"></a>

```java
public void resetViewArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsResourceexplorer2Search resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_resourceexplorer2_search.DataAwsResourceexplorer2Search;

DataAwsResourceexplorer2Search.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_resourceexplorer2_search.DataAwsResourceexplorer2Search;

DataAwsResourceexplorer2Search.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_resourceexplorer2_search.DataAwsResourceexplorer2Search;

DataAwsResourceexplorer2Search.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_resourceexplorer2_search.DataAwsResourceexplorer2Search;

DataAwsResourceexplorer2Search.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsResourceexplorer2Search.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataAwsResourceexplorer2Search resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsResourceexplorer2Search to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsResourceexplorer2Search that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/data-sources/resourceexplorer2_search#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsResourceexplorer2Search to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.resourceCount">resourceCount</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList">DataAwsResourceexplorer2SearchResourceCountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList">DataAwsResourceexplorer2SearchResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.queryStringInput">queryStringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.viewArnInput">viewArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.queryString">queryString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.viewArn">viewArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `resourceCount`<sup>Required</sup> <a name="resourceCount" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.resourceCount"></a>

```java
public DataAwsResourceexplorer2SearchResourceCountList getResourceCount();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList">DataAwsResourceexplorer2SearchResourceCountList</a>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.resources"></a>

```java
public DataAwsResourceexplorer2SearchResourcesList getResources();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList">DataAwsResourceexplorer2SearchResourcesList</a>

---

##### `queryStringInput`<sup>Optional</sup> <a name="queryStringInput" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.queryStringInput"></a>

```java
public java.lang.String getQueryStringInput();
```

- *Type:* java.lang.String

---

##### `viewArnInput`<sup>Optional</sup> <a name="viewArnInput" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.viewArnInput"></a>

```java
public java.lang.String getViewArnInput();
```

- *Type:* java.lang.String

---

##### `queryString`<sup>Required</sup> <a name="queryString" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.queryString"></a>

```java
public java.lang.String getQueryString();
```

- *Type:* java.lang.String

---

##### `viewArn`<sup>Required</sup> <a name="viewArn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.viewArn"></a>

```java
public java.lang.String getViewArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsResourceexplorer2SearchConfig <a name="DataAwsResourceexplorer2SearchConfig" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_resourceexplorer2_search.DataAwsResourceexplorer2SearchConfig;

DataAwsResourceexplorer2SearchConfig.builder()
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
    .queryString(java.lang.String)
//  .viewArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.queryString">queryString</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/data-sources/resourceexplorer2_search#query_string DataAwsResourceexplorer2Search#query_string}. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.viewArn">viewArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/data-sources/resourceexplorer2_search#view_arn DataAwsResourceexplorer2Search#view_arn}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `queryString`<sup>Required</sup> <a name="queryString" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.queryString"></a>

```java
public java.lang.String getQueryString();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/data-sources/resourceexplorer2_search#query_string DataAwsResourceexplorer2Search#query_string}.

---

##### `viewArn`<sup>Optional</sup> <a name="viewArn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.viewArn"></a>

```java
public java.lang.String getViewArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/data-sources/resourceexplorer2_search#view_arn DataAwsResourceexplorer2Search#view_arn}.

---

### DataAwsResourceexplorer2SearchResourceCount <a name="DataAwsResourceexplorer2SearchResourceCount" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCount.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_resourceexplorer2_search.DataAwsResourceexplorer2SearchResourceCount;

DataAwsResourceexplorer2SearchResourceCount.builder()
    .build();
```


### DataAwsResourceexplorer2SearchResources <a name="DataAwsResourceexplorer2SearchResources" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_resourceexplorer2_search.DataAwsResourceexplorer2SearchResources;

DataAwsResourceexplorer2SearchResources.builder()
    .build();
```


### DataAwsResourceexplorer2SearchResourcesProperties <a name="DataAwsResourceexplorer2SearchResourcesProperties" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesProperties.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_resourceexplorer2_search.DataAwsResourceexplorer2SearchResourcesProperties;

DataAwsResourceexplorer2SearchResourcesProperties.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsResourceexplorer2SearchResourceCountList <a name="DataAwsResourceexplorer2SearchResourceCountList" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_resourceexplorer2_search.DataAwsResourceexplorer2SearchResourceCountList;

new DataAwsResourceexplorer2SearchResourceCountList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.get"></a>

```java
public DataAwsResourceexplorer2SearchResourceCountOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsResourceexplorer2SearchResourceCountOutputReference <a name="DataAwsResourceexplorer2SearchResourceCountOutputReference" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_resourceexplorer2_search.DataAwsResourceexplorer2SearchResourceCountOutputReference;

new DataAwsResourceexplorer2SearchResourceCountOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.property.complete">complete</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.property.totalResources">totalResources</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCount">DataAwsResourceexplorer2SearchResourceCount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `complete`<sup>Required</sup> <a name="complete" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.property.complete"></a>

```java
public IResolvable getComplete();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `totalResources`<sup>Required</sup> <a name="totalResources" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.property.totalResources"></a>

```java
public java.lang.Number getTotalResources();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.property.internalValue"></a>

```java
public DataAwsResourceexplorer2SearchResourceCount getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCount">DataAwsResourceexplorer2SearchResourceCount</a>

---


### DataAwsResourceexplorer2SearchResourcesList <a name="DataAwsResourceexplorer2SearchResourcesList" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_resourceexplorer2_search.DataAwsResourceexplorer2SearchResourcesList;

new DataAwsResourceexplorer2SearchResourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.get"></a>

```java
public DataAwsResourceexplorer2SearchResourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsResourceexplorer2SearchResourcesOutputReference <a name="DataAwsResourceexplorer2SearchResourcesOutputReference" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_resourceexplorer2_search.DataAwsResourceexplorer2SearchResourcesOutputReference;

new DataAwsResourceexplorer2SearchResourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.lastReportedAt">lastReportedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.owningAccountId">owningAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList">DataAwsResourceexplorer2SearchResourcesPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResources">DataAwsResourceexplorer2SearchResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `lastReportedAt`<sup>Required</sup> <a name="lastReportedAt" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.lastReportedAt"></a>

```java
public java.lang.String getLastReportedAt();
```

- *Type:* java.lang.String

---

##### `owningAccountId`<sup>Required</sup> <a name="owningAccountId" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.owningAccountId"></a>

```java
public java.lang.String getOwningAccountId();
```

- *Type:* java.lang.String

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.properties"></a>

```java
public DataAwsResourceexplorer2SearchResourcesPropertiesList getProperties();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList">DataAwsResourceexplorer2SearchResourcesPropertiesList</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.internalValue"></a>

```java
public DataAwsResourceexplorer2SearchResources getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResources">DataAwsResourceexplorer2SearchResources</a>

---


### DataAwsResourceexplorer2SearchResourcesPropertiesList <a name="DataAwsResourceexplorer2SearchResourcesPropertiesList" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_resourceexplorer2_search.DataAwsResourceexplorer2SearchResourcesPropertiesList;

new DataAwsResourceexplorer2SearchResourcesPropertiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.get"></a>

```java
public DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference <a name="DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_resourceexplorer2_search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference;

new DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.property.data">data</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.property.lastReportedAt">lastReportedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesProperties">DataAwsResourceexplorer2SearchResourcesProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.property.data"></a>

```java
public java.lang.String getData();
```

- *Type:* java.lang.String

---

##### `lastReportedAt`<sup>Required</sup> <a name="lastReportedAt" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.property.lastReportedAt"></a>

```java
public java.lang.String getLastReportedAt();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.property.internalValue"></a>

```java
public DataAwsResourceexplorer2SearchResourcesProperties getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesProperties">DataAwsResourceexplorer2SearchResourcesProperties</a>

---



