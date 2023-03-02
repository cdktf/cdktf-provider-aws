# `apiGatewayDocumentationPart` Submodule <a name="`apiGatewayDocumentationPart` Submodule" id="@cdktf/provider-aws.apiGatewayDocumentationPart"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiGatewayDocumentationPart <a name="ApiGatewayDocumentationPart" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part aws_api_gateway_documentation_part}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_documentation_part.ApiGatewayDocumentationPart;

ApiGatewayDocumentationPart.Builder.create(Construct scope, java.lang.String id)
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
    .location(ApiGatewayDocumentationPartLocation)
    .properties(java.lang.String)
    .restApiId(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.location">location</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation">ApiGatewayDocumentationPartLocation</a></code> | location block. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.properties">properties</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part#properties ApiGatewayDocumentationPart#properties}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.restApiId">restApiId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part#rest_api_id ApiGatewayDocumentationPart#rest_api_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part#id ApiGatewayDocumentationPart#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.location"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation">ApiGatewayDocumentationPartLocation</a>

location block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part#location ApiGatewayDocumentationPart#location}

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.properties"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part#properties ApiGatewayDocumentationPart#properties}.

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.restApiId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part#rest_api_id ApiGatewayDocumentationPart#rest_api_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part#id ApiGatewayDocumentationPart#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.putLocation">putLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putLocation` <a name="putLocation" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.putLocation"></a>

```java
public void putLocation(ApiGatewayDocumentationPartLocation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.putLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation">ApiGatewayDocumentationPartLocation</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_documentation_part.ApiGatewayDocumentationPart;

ApiGatewayDocumentationPart.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_documentation_part.ApiGatewayDocumentationPart;

ApiGatewayDocumentationPart.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_documentation_part.ApiGatewayDocumentationPart;

ApiGatewayDocumentationPart.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.location">location</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference">ApiGatewayDocumentationPartLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.locationInput">locationInput</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation">ApiGatewayDocumentationPartLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.propertiesInput">propertiesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.restApiIdInput">restApiIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.properties">properties</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.restApiId">restApiId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.location"></a>

```java
public ApiGatewayDocumentationPartLocationOutputReference getLocation();
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference">ApiGatewayDocumentationPartLocationOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.locationInput"></a>

```java
public ApiGatewayDocumentationPartLocation getLocationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation">ApiGatewayDocumentationPartLocation</a>

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.propertiesInput"></a>

```java
public java.lang.String getPropertiesInput();
```

- *Type:* java.lang.String

---

##### `restApiIdInput`<sup>Optional</sup> <a name="restApiIdInput" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.restApiIdInput"></a>

```java
public java.lang.String getRestApiIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.properties"></a>

```java
public java.lang.String getProperties();
```

- *Type:* java.lang.String

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.restApiId"></a>

```java
public java.lang.String getRestApiId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPart.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApiGatewayDocumentationPartConfig <a name="ApiGatewayDocumentationPartConfig" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_documentation_part.ApiGatewayDocumentationPartConfig;

ApiGatewayDocumentationPartConfig.builder()
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
    .location(ApiGatewayDocumentationPartLocation)
    .properties(java.lang.String)
    .restApiId(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.location">location</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation">ApiGatewayDocumentationPartLocation</a></code> | location block. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.properties">properties</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part#properties ApiGatewayDocumentationPart#properties}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.restApiId">restApiId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part#rest_api_id ApiGatewayDocumentationPart#rest_api_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part#id ApiGatewayDocumentationPart#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.location"></a>

```java
public ApiGatewayDocumentationPartLocation getLocation();
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation">ApiGatewayDocumentationPartLocation</a>

location block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part#location ApiGatewayDocumentationPart#location}

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.properties"></a>

```java
public java.lang.String getProperties();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part#properties ApiGatewayDocumentationPart#properties}.

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.restApiId"></a>

```java
public java.lang.String getRestApiId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part#rest_api_id ApiGatewayDocumentationPart#rest_api_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part#id ApiGatewayDocumentationPart#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ApiGatewayDocumentationPartLocation <a name="ApiGatewayDocumentationPartLocation" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_documentation_part.ApiGatewayDocumentationPartLocation;

ApiGatewayDocumentationPartLocation.builder()
    .type(java.lang.String)
//  .method(java.lang.String)
//  .name(java.lang.String)
//  .path(java.lang.String)
//  .statusCode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part#type ApiGatewayDocumentationPart#type}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation.property.method">method</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part#method ApiGatewayDocumentationPart#method}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part#name ApiGatewayDocumentationPart#name}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part#path ApiGatewayDocumentationPart#path}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation.property.statusCode">statusCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part#status_code ApiGatewayDocumentationPart#status_code}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part#type ApiGatewayDocumentationPart#type}.

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part#method ApiGatewayDocumentationPart#method}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part#name ApiGatewayDocumentationPart#name}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part#path ApiGatewayDocumentationPart#path}.

---

##### `statusCode`<sup>Optional</sup> <a name="statusCode" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation.property.statusCode"></a>

```java
public java.lang.String getStatusCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part#status_code ApiGatewayDocumentationPart#status_code}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiGatewayDocumentationPartLocationOutputReference <a name="ApiGatewayDocumentationPartLocationOutputReference" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_documentation_part.ApiGatewayDocumentationPartLocationOutputReference;

new ApiGatewayDocumentationPartLocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.resetStatusCode">resetStatusCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMethod` <a name="resetMethod" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.resetMethod"></a>

```java
public void resetMethod()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetStatusCode` <a name="resetStatusCode" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.resetStatusCode"></a>

```java
public void resetStatusCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.methodInput">methodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.statusCodeInput">statusCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.method">method</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.statusCode">statusCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation">ApiGatewayDocumentationPartLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.methodInput"></a>

```java
public java.lang.String getMethodInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `statusCodeInput`<sup>Optional</sup> <a name="statusCodeInput" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.statusCodeInput"></a>

```java
public java.lang.String getStatusCodeInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.statusCode"></a>

```java
public java.lang.String getStatusCode();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocationOutputReference.property.internalValue"></a>

```java
public ApiGatewayDocumentationPartLocation getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayDocumentationPart.ApiGatewayDocumentationPartLocation">ApiGatewayDocumentationPartLocation</a>

---



