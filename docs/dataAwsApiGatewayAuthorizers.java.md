# `dataAwsApiGatewayAuthorizers` Submodule <a name="`dataAwsApiGatewayAuthorizers` Submodule" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsApiGatewayAuthorizers <a name="DataAwsApiGatewayAuthorizers" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/data-sources/api_gateway_authorizers aws_api_gateway_authorizers}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_api_gateway_authorizers.DataAwsApiGatewayAuthorizers;

DataAwsApiGatewayAuthorizers.Builder.create(Construct scope, java.lang.String id)
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
    .restApiId(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.Initializer.parameter.restApiId">restApiId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/data-sources/api_gateway_authorizers#rest_api_id DataAwsApiGatewayAuthorizers#rest_api_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/data-sources/api_gateway_authorizers#id DataAwsApiGatewayAuthorizers#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.Initializer.parameter.restApiId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/data-sources/api_gateway_authorizers#rest_api_id DataAwsApiGatewayAuthorizers#rest_api_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/data-sources/api_gateway_authorizers#id DataAwsApiGatewayAuthorizers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsApiGatewayAuthorizers resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_api_gateway_authorizers.DataAwsApiGatewayAuthorizers;

DataAwsApiGatewayAuthorizers.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_api_gateway_authorizers.DataAwsApiGatewayAuthorizers;

DataAwsApiGatewayAuthorizers.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_api_gateway_authorizers.DataAwsApiGatewayAuthorizers;

DataAwsApiGatewayAuthorizers.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_api_gateway_authorizers.DataAwsApiGatewayAuthorizers;

DataAwsApiGatewayAuthorizers.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsApiGatewayAuthorizers.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataAwsApiGatewayAuthorizers resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsApiGatewayAuthorizers to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsApiGatewayAuthorizers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/data-sources/api_gateway_authorizers#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsApiGatewayAuthorizers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.property.ids">ids</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.property.restApiIdInput">restApiIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.property.restApiId">restApiId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `ids`<sup>Required</sup> <a name="ids" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.property.ids"></a>

```java
public java.util.List<java.lang.String> getIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `restApiIdInput`<sup>Optional</sup> <a name="restApiIdInput" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.property.restApiIdInput"></a>

```java
public java.lang.String getRestApiIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.property.restApiId"></a>

```java
public java.lang.String getRestApiId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizers.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsApiGatewayAuthorizersConfig <a name="DataAwsApiGatewayAuthorizersConfig" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizersConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_api_gateway_authorizers.DataAwsApiGatewayAuthorizersConfig;

DataAwsApiGatewayAuthorizersConfig.builder()
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
    .restApiId(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizersConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizersConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizersConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizersConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizersConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizersConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizersConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizersConfig.property.restApiId">restApiId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/data-sources/api_gateway_authorizers#rest_api_id DataAwsApiGatewayAuthorizers#rest_api_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizersConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/data-sources/api_gateway_authorizers#id DataAwsApiGatewayAuthorizers#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizersConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizersConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizersConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizersConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizersConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizersConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizersConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizersConfig.property.restApiId"></a>

```java
public java.lang.String getRestApiId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/data-sources/api_gateway_authorizers#rest_api_id DataAwsApiGatewayAuthorizers#rest_api_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsApiGatewayAuthorizers.DataAwsApiGatewayAuthorizersConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/data-sources/api_gateway_authorizers#id DataAwsApiGatewayAuthorizers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



