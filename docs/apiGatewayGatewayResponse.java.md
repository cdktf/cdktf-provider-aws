# `apiGatewayGatewayResponse` Submodule <a name="`apiGatewayGatewayResponse` Submodule" id="@cdktf/provider-aws.apiGatewayGatewayResponse"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiGatewayGatewayResponse <a name="ApiGatewayGatewayResponse" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response aws_api_gateway_gateway_response}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_gateway_response.ApiGatewayGatewayResponse;

ApiGatewayGatewayResponse.Builder.create(Construct scope, java.lang.String id)
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
    .responseType(java.lang.String)
    .restApiId(java.lang.String)
//  .id(java.lang.String)
//  .responseParameters(java.util.Map<java.lang.String, java.lang.String>)
//  .responseTemplates(java.util.Map<java.lang.String, java.lang.String>)
//  .statusCode(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.Initializer.parameter.responseType">responseType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response#response_type ApiGatewayGatewayResponse#response_type}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.Initializer.parameter.restApiId">restApiId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response#rest_api_id ApiGatewayGatewayResponse#rest_api_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response#id ApiGatewayGatewayResponse#id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.Initializer.parameter.responseParameters">responseParameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response#response_parameters ApiGatewayGatewayResponse#response_parameters}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.Initializer.parameter.responseTemplates">responseTemplates</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response#response_templates ApiGatewayGatewayResponse#response_templates}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.Initializer.parameter.statusCode">statusCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response#status_code ApiGatewayGatewayResponse#status_code}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `responseType`<sup>Required</sup> <a name="responseType" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.Initializer.parameter.responseType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response#response_type ApiGatewayGatewayResponse#response_type}.

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.Initializer.parameter.restApiId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response#rest_api_id ApiGatewayGatewayResponse#rest_api_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response#id ApiGatewayGatewayResponse#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `responseParameters`<sup>Optional</sup> <a name="responseParameters" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.Initializer.parameter.responseParameters"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response#response_parameters ApiGatewayGatewayResponse#response_parameters}.

---

##### `responseTemplates`<sup>Optional</sup> <a name="responseTemplates" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.Initializer.parameter.responseTemplates"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response#response_templates ApiGatewayGatewayResponse#response_templates}.

---

##### `statusCode`<sup>Optional</sup> <a name="statusCode" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.Initializer.parameter.statusCode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response#status_code ApiGatewayGatewayResponse#status_code}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.resetResponseParameters">resetResponseParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.resetResponseTemplates">resetResponseTemplates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.resetStatusCode">resetStatusCode</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.resetId"></a>

```java
public void resetId()
```

##### `resetResponseParameters` <a name="resetResponseParameters" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.resetResponseParameters"></a>

```java
public void resetResponseParameters()
```

##### `resetResponseTemplates` <a name="resetResponseTemplates" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.resetResponseTemplates"></a>

```java
public void resetResponseTemplates()
```

##### `resetStatusCode` <a name="resetStatusCode" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.resetStatusCode"></a>

```java
public void resetStatusCode()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_gateway_response.ApiGatewayGatewayResponse;

ApiGatewayGatewayResponse.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_gateway_response.ApiGatewayGatewayResponse;

ApiGatewayGatewayResponse.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_gateway_response.ApiGatewayGatewayResponse;

ApiGatewayGatewayResponse.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.responseParametersInput">responseParametersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.responseTemplatesInput">responseTemplatesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.responseTypeInput">responseTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.restApiIdInput">restApiIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.statusCodeInput">statusCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.responseParameters">responseParameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.responseTemplates">responseTemplates</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.responseType">responseType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.restApiId">restApiId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.statusCode">statusCode</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `responseParametersInput`<sup>Optional</sup> <a name="responseParametersInput" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.responseParametersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResponseParametersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `responseTemplatesInput`<sup>Optional</sup> <a name="responseTemplatesInput" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.responseTemplatesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResponseTemplatesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `responseTypeInput`<sup>Optional</sup> <a name="responseTypeInput" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.responseTypeInput"></a>

```java
public java.lang.String getResponseTypeInput();
```

- *Type:* java.lang.String

---

##### `restApiIdInput`<sup>Optional</sup> <a name="restApiIdInput" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.restApiIdInput"></a>

```java
public java.lang.String getRestApiIdInput();
```

- *Type:* java.lang.String

---

##### `statusCodeInput`<sup>Optional</sup> <a name="statusCodeInput" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.statusCodeInput"></a>

```java
public java.lang.String getStatusCodeInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `responseParameters`<sup>Required</sup> <a name="responseParameters" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.responseParameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResponseParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `responseTemplates`<sup>Required</sup> <a name="responseTemplates" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.responseTemplates"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResponseTemplates();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `responseType`<sup>Required</sup> <a name="responseType" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.responseType"></a>

```java
public java.lang.String getResponseType();
```

- *Type:* java.lang.String

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.restApiId"></a>

```java
public java.lang.String getRestApiId();
```

- *Type:* java.lang.String

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.statusCode"></a>

```java
public java.lang.String getStatusCode();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponse.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApiGatewayGatewayResponseConfig <a name="ApiGatewayGatewayResponseConfig" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_gateway_response.ApiGatewayGatewayResponseConfig;

ApiGatewayGatewayResponseConfig.builder()
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
    .responseType(java.lang.String)
    .restApiId(java.lang.String)
//  .id(java.lang.String)
//  .responseParameters(java.util.Map<java.lang.String, java.lang.String>)
//  .responseTemplates(java.util.Map<java.lang.String, java.lang.String>)
//  .statusCode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.responseType">responseType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response#response_type ApiGatewayGatewayResponse#response_type}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.restApiId">restApiId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response#rest_api_id ApiGatewayGatewayResponse#rest_api_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response#id ApiGatewayGatewayResponse#id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.responseParameters">responseParameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response#response_parameters ApiGatewayGatewayResponse#response_parameters}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.responseTemplates">responseTemplates</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response#response_templates ApiGatewayGatewayResponse#response_templates}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.statusCode">statusCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response#status_code ApiGatewayGatewayResponse#status_code}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `responseType`<sup>Required</sup> <a name="responseType" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.responseType"></a>

```java
public java.lang.String getResponseType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response#response_type ApiGatewayGatewayResponse#response_type}.

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.restApiId"></a>

```java
public java.lang.String getRestApiId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response#rest_api_id ApiGatewayGatewayResponse#rest_api_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response#id ApiGatewayGatewayResponse#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `responseParameters`<sup>Optional</sup> <a name="responseParameters" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.responseParameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResponseParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response#response_parameters ApiGatewayGatewayResponse#response_parameters}.

---

##### `responseTemplates`<sup>Optional</sup> <a name="responseTemplates" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.responseTemplates"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResponseTemplates();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response#response_templates ApiGatewayGatewayResponse#response_templates}.

---

##### `statusCode`<sup>Optional</sup> <a name="statusCode" id="@cdktf/provider-aws.apiGatewayGatewayResponse.ApiGatewayGatewayResponseConfig.property.statusCode"></a>

```java
public java.lang.String getStatusCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response#status_code ApiGatewayGatewayResponse#status_code}.

---



