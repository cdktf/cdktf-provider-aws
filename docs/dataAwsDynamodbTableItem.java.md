# `dataAwsDynamodbTableItem` Submodule <a name="`dataAwsDynamodbTableItem` Submodule" id="@cdktf/provider-aws.dataAwsDynamodbTableItem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsDynamodbTableItem <a name="DataAwsDynamodbTableItem" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table_item aws_dynamodb_table_item}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_dynamodb_table_item.DataAwsDynamodbTableItem;

DataAwsDynamodbTableItem.Builder.create(Construct scope, java.lang.String id)
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
    .key(java.lang.String)
    .tableName(java.lang.String)
//  .expressionAttributeNames(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .projectionExpression(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.Initializer.parameter.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table_item#key DataAwsDynamodbTableItem#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.Initializer.parameter.tableName">tableName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table_item#table_name DataAwsDynamodbTableItem#table_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.Initializer.parameter.expressionAttributeNames">expressionAttributeNames</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table_item#expression_attribute_names DataAwsDynamodbTableItem#expression_attribute_names}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table_item#id DataAwsDynamodbTableItem#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.Initializer.parameter.projectionExpression">projectionExpression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table_item#projection_expression DataAwsDynamodbTableItem#projection_expression}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.Initializer.parameter.key"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table_item#key DataAwsDynamodbTableItem#key}.

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.Initializer.parameter.tableName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table_item#table_name DataAwsDynamodbTableItem#table_name}.

---

##### `expressionAttributeNames`<sup>Optional</sup> <a name="expressionAttributeNames" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.Initializer.parameter.expressionAttributeNames"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table_item#expression_attribute_names DataAwsDynamodbTableItem#expression_attribute_names}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table_item#id DataAwsDynamodbTableItem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `projectionExpression`<sup>Optional</sup> <a name="projectionExpression" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.Initializer.parameter.projectionExpression"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table_item#projection_expression DataAwsDynamodbTableItem#projection_expression}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.resetExpressionAttributeNames">resetExpressionAttributeNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.resetProjectionExpression">resetProjectionExpression</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetExpressionAttributeNames` <a name="resetExpressionAttributeNames" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.resetExpressionAttributeNames"></a>

```java
public void resetExpressionAttributeNames()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.resetId"></a>

```java
public void resetId()
```

##### `resetProjectionExpression` <a name="resetProjectionExpression" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.resetProjectionExpression"></a>

```java
public void resetProjectionExpression()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_dynamodb_table_item.DataAwsDynamodbTableItem;

DataAwsDynamodbTableItem.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_dynamodb_table_item.DataAwsDynamodbTableItem;

DataAwsDynamodbTableItem.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_dynamodb_table_item.DataAwsDynamodbTableItem;

DataAwsDynamodbTableItem.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.item">item</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.expressionAttributeNamesInput">expressionAttributeNamesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.projectionExpressionInput">projectionExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.tableNameInput">tableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.expressionAttributeNames">expressionAttributeNames</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.projectionExpression">projectionExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.tableName">tableName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `item`<sup>Required</sup> <a name="item" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.item"></a>

```java
public java.lang.String getItem();
```

- *Type:* java.lang.String

---

##### `expressionAttributeNamesInput`<sup>Optional</sup> <a name="expressionAttributeNamesInput" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.expressionAttributeNamesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExpressionAttributeNamesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `projectionExpressionInput`<sup>Optional</sup> <a name="projectionExpressionInput" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.projectionExpressionInput"></a>

```java
public java.lang.String getProjectionExpressionInput();
```

- *Type:* java.lang.String

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.tableNameInput"></a>

```java
public java.lang.String getTableNameInput();
```

- *Type:* java.lang.String

---

##### `expressionAttributeNames`<sup>Required</sup> <a name="expressionAttributeNames" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.expressionAttributeNames"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExpressionAttributeNames();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `projectionExpression`<sup>Required</sup> <a name="projectionExpression" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.projectionExpression"></a>

```java
public java.lang.String getProjectionExpression();
```

- *Type:* java.lang.String

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItem.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsDynamodbTableItemConfig <a name="DataAwsDynamodbTableItemConfig" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_dynamodb_table_item.DataAwsDynamodbTableItemConfig;

DataAwsDynamodbTableItemConfig.builder()
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
    .key(java.lang.String)
    .tableName(java.lang.String)
//  .expressionAttributeNames(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .projectionExpression(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table_item#key DataAwsDynamodbTableItem#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.tableName">tableName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table_item#table_name DataAwsDynamodbTableItem#table_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.expressionAttributeNames">expressionAttributeNames</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table_item#expression_attribute_names DataAwsDynamodbTableItem#expression_attribute_names}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table_item#id DataAwsDynamodbTableItem#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.projectionExpression">projectionExpression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table_item#projection_expression DataAwsDynamodbTableItem#projection_expression}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table_item#key DataAwsDynamodbTableItem#key}.

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table_item#table_name DataAwsDynamodbTableItem#table_name}.

---

##### `expressionAttributeNames`<sup>Optional</sup> <a name="expressionAttributeNames" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.expressionAttributeNames"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExpressionAttributeNames();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table_item#expression_attribute_names DataAwsDynamodbTableItem#expression_attribute_names}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table_item#id DataAwsDynamodbTableItem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `projectionExpression`<sup>Optional</sup> <a name="projectionExpression" id="@cdktf/provider-aws.dataAwsDynamodbTableItem.DataAwsDynamodbTableItemConfig.property.projectionExpression"></a>

```java
public java.lang.String getProjectionExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table_item#projection_expression DataAwsDynamodbTableItem#projection_expression}.

---



