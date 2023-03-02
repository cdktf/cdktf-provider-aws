# `apiGatewayIntegrationResponse` Submodule <a name="`apiGatewayIntegrationResponse` Submodule" id="@cdktf/provider-aws.apiGatewayIntegrationResponse"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiGatewayIntegrationResponse <a name="ApiGatewayIntegrationResponse" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response aws_api_gateway_integration_response}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_integration_response.ApiGatewayIntegrationResponse;

ApiGatewayIntegrationResponse.Builder.create(Construct scope, java.lang.String id)
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
    .httpMethod(java.lang.String)
    .resourceId(java.lang.String)
    .restApiId(java.lang.String)
    .statusCode(java.lang.String)
//  .contentHandling(java.lang.String)
//  .id(java.lang.String)
//  .responseParameters(java.util.Map<java.lang.String, java.lang.String>)
//  .responseTemplates(java.util.Map<java.lang.String, java.lang.String>)
//  .selectionPattern(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.Initializer.parameter.httpMethod">httpMethod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#http_method ApiGatewayIntegrationResponse#http_method}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.Initializer.parameter.resourceId">resourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#resource_id ApiGatewayIntegrationResponse#resource_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.Initializer.parameter.restApiId">restApiId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#rest_api_id ApiGatewayIntegrationResponse#rest_api_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.Initializer.parameter.statusCode">statusCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#status_code ApiGatewayIntegrationResponse#status_code}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.Initializer.parameter.contentHandling">contentHandling</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#content_handling ApiGatewayIntegrationResponse#content_handling}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#id ApiGatewayIntegrationResponse#id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.Initializer.parameter.responseParameters">responseParameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#response_parameters ApiGatewayIntegrationResponse#response_parameters}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.Initializer.parameter.responseTemplates">responseTemplates</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#response_templates ApiGatewayIntegrationResponse#response_templates}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.Initializer.parameter.selectionPattern">selectionPattern</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#selection_pattern ApiGatewayIntegrationResponse#selection_pattern}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `httpMethod`<sup>Required</sup> <a name="httpMethod" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.Initializer.parameter.httpMethod"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#http_method ApiGatewayIntegrationResponse#http_method}.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.Initializer.parameter.resourceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#resource_id ApiGatewayIntegrationResponse#resource_id}.

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.Initializer.parameter.restApiId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#rest_api_id ApiGatewayIntegrationResponse#rest_api_id}.

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.Initializer.parameter.statusCode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#status_code ApiGatewayIntegrationResponse#status_code}.

---

##### `contentHandling`<sup>Optional</sup> <a name="contentHandling" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.Initializer.parameter.contentHandling"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#content_handling ApiGatewayIntegrationResponse#content_handling}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#id ApiGatewayIntegrationResponse#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `responseParameters`<sup>Optional</sup> <a name="responseParameters" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.Initializer.parameter.responseParameters"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#response_parameters ApiGatewayIntegrationResponse#response_parameters}.

---

##### `responseTemplates`<sup>Optional</sup> <a name="responseTemplates" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.Initializer.parameter.responseTemplates"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#response_templates ApiGatewayIntegrationResponse#response_templates}.

---

##### `selectionPattern`<sup>Optional</sup> <a name="selectionPattern" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.Initializer.parameter.selectionPattern"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#selection_pattern ApiGatewayIntegrationResponse#selection_pattern}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.resetContentHandling">resetContentHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.resetResponseParameters">resetResponseParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.resetResponseTemplates">resetResponseTemplates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.resetSelectionPattern">resetSelectionPattern</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetContentHandling` <a name="resetContentHandling" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.resetContentHandling"></a>

```java
public void resetContentHandling()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.resetId"></a>

```java
public void resetId()
```

##### `resetResponseParameters` <a name="resetResponseParameters" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.resetResponseParameters"></a>

```java
public void resetResponseParameters()
```

##### `resetResponseTemplates` <a name="resetResponseTemplates" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.resetResponseTemplates"></a>

```java
public void resetResponseTemplates()
```

##### `resetSelectionPattern` <a name="resetSelectionPattern" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.resetSelectionPattern"></a>

```java
public void resetSelectionPattern()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_integration_response.ApiGatewayIntegrationResponse;

ApiGatewayIntegrationResponse.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_integration_response.ApiGatewayIntegrationResponse;

ApiGatewayIntegrationResponse.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_integration_response.ApiGatewayIntegrationResponse;

ApiGatewayIntegrationResponse.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.contentHandlingInput">contentHandlingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.httpMethodInput">httpMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.resourceIdInput">resourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.responseParametersInput">responseParametersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.responseTemplatesInput">responseTemplatesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.restApiIdInput">restApiIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.selectionPatternInput">selectionPatternInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.statusCodeInput">statusCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.contentHandling">contentHandling</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.httpMethod">httpMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.responseParameters">responseParameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.responseTemplates">responseTemplates</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.restApiId">restApiId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.selectionPattern">selectionPattern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.statusCode">statusCode</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `contentHandlingInput`<sup>Optional</sup> <a name="contentHandlingInput" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.contentHandlingInput"></a>

```java
public java.lang.String getContentHandlingInput();
```

- *Type:* java.lang.String

---

##### `httpMethodInput`<sup>Optional</sup> <a name="httpMethodInput" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.httpMethodInput"></a>

```java
public java.lang.String getHttpMethodInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.resourceIdInput"></a>

```java
public java.lang.String getResourceIdInput();
```

- *Type:* java.lang.String

---

##### `responseParametersInput`<sup>Optional</sup> <a name="responseParametersInput" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.responseParametersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResponseParametersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `responseTemplatesInput`<sup>Optional</sup> <a name="responseTemplatesInput" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.responseTemplatesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResponseTemplatesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `restApiIdInput`<sup>Optional</sup> <a name="restApiIdInput" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.restApiIdInput"></a>

```java
public java.lang.String getRestApiIdInput();
```

- *Type:* java.lang.String

---

##### `selectionPatternInput`<sup>Optional</sup> <a name="selectionPatternInput" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.selectionPatternInput"></a>

```java
public java.lang.String getSelectionPatternInput();
```

- *Type:* java.lang.String

---

##### `statusCodeInput`<sup>Optional</sup> <a name="statusCodeInput" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.statusCodeInput"></a>

```java
public java.lang.String getStatusCodeInput();
```

- *Type:* java.lang.String

---

##### `contentHandling`<sup>Required</sup> <a name="contentHandling" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.contentHandling"></a>

```java
public java.lang.String getContentHandling();
```

- *Type:* java.lang.String

---

##### `httpMethod`<sup>Required</sup> <a name="httpMethod" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.httpMethod"></a>

```java
public java.lang.String getHttpMethod();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

---

##### `responseParameters`<sup>Required</sup> <a name="responseParameters" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.responseParameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResponseParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `responseTemplates`<sup>Required</sup> <a name="responseTemplates" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.responseTemplates"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResponseTemplates();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.restApiId"></a>

```java
public java.lang.String getRestApiId();
```

- *Type:* java.lang.String

---

##### `selectionPattern`<sup>Required</sup> <a name="selectionPattern" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.selectionPattern"></a>

```java
public java.lang.String getSelectionPattern();
```

- *Type:* java.lang.String

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.statusCode"></a>

```java
public java.lang.String getStatusCode();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponse.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApiGatewayIntegrationResponseConfig <a name="ApiGatewayIntegrationResponseConfig" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_integration_response.ApiGatewayIntegrationResponseConfig;

ApiGatewayIntegrationResponseConfig.builder()
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
    .httpMethod(java.lang.String)
    .resourceId(java.lang.String)
    .restApiId(java.lang.String)
    .statusCode(java.lang.String)
//  .contentHandling(java.lang.String)
//  .id(java.lang.String)
//  .responseParameters(java.util.Map<java.lang.String, java.lang.String>)
//  .responseTemplates(java.util.Map<java.lang.String, java.lang.String>)
//  .selectionPattern(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.httpMethod">httpMethod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#http_method ApiGatewayIntegrationResponse#http_method}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#resource_id ApiGatewayIntegrationResponse#resource_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.restApiId">restApiId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#rest_api_id ApiGatewayIntegrationResponse#rest_api_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.statusCode">statusCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#status_code ApiGatewayIntegrationResponse#status_code}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.contentHandling">contentHandling</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#content_handling ApiGatewayIntegrationResponse#content_handling}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#id ApiGatewayIntegrationResponse#id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.responseParameters">responseParameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#response_parameters ApiGatewayIntegrationResponse#response_parameters}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.responseTemplates">responseTemplates</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#response_templates ApiGatewayIntegrationResponse#response_templates}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.selectionPattern">selectionPattern</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#selection_pattern ApiGatewayIntegrationResponse#selection_pattern}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `httpMethod`<sup>Required</sup> <a name="httpMethod" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.httpMethod"></a>

```java
public java.lang.String getHttpMethod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#http_method ApiGatewayIntegrationResponse#http_method}.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#resource_id ApiGatewayIntegrationResponse#resource_id}.

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.restApiId"></a>

```java
public java.lang.String getRestApiId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#rest_api_id ApiGatewayIntegrationResponse#rest_api_id}.

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.statusCode"></a>

```java
public java.lang.String getStatusCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#status_code ApiGatewayIntegrationResponse#status_code}.

---

##### `contentHandling`<sup>Optional</sup> <a name="contentHandling" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.contentHandling"></a>

```java
public java.lang.String getContentHandling();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#content_handling ApiGatewayIntegrationResponse#content_handling}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#id ApiGatewayIntegrationResponse#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `responseParameters`<sup>Optional</sup> <a name="responseParameters" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.responseParameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResponseParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#response_parameters ApiGatewayIntegrationResponse#response_parameters}.

---

##### `responseTemplates`<sup>Optional</sup> <a name="responseTemplates" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.responseTemplates"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResponseTemplates();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#response_templates ApiGatewayIntegrationResponse#response_templates}.

---

##### `selectionPattern`<sup>Optional</sup> <a name="selectionPattern" id="@cdktf/provider-aws.apiGatewayIntegrationResponse.ApiGatewayIntegrationResponseConfig.property.selectionPattern"></a>

```java
public java.lang.String getSelectionPattern();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response#selection_pattern ApiGatewayIntegrationResponse#selection_pattern}.

---



