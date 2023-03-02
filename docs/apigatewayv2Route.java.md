# `apigatewayv2Route` Submodule <a name="`apigatewayv2Route` Submodule" id="@cdktf/provider-aws.apigatewayv2Route"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Apigatewayv2Route <a name="Apigatewayv2Route" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route aws_apigatewayv2_route}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apigatewayv2_route.Apigatewayv2Route;

Apigatewayv2Route.Builder.create(Construct scope, java.lang.String id)
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
    .apiId(java.lang.String)
    .routeKey(java.lang.String)
//  .apiKeyRequired(java.lang.Boolean)
//  .apiKeyRequired(IResolvable)
//  .authorizationScopes(java.util.List<java.lang.String>)
//  .authorizationType(java.lang.String)
//  .authorizerId(java.lang.String)
//  .id(java.lang.String)
//  .modelSelectionExpression(java.lang.String)
//  .operationName(java.lang.String)
//  .requestModels(java.util.Map<java.lang.String, java.lang.String>)
//  .requestParameter(IResolvable)
//  .requestParameter(java.util.List<Apigatewayv2RouteRequestParameter>)
//  .routeResponseSelectionExpression(java.lang.String)
//  .target(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.apiId">apiId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#api_id Apigatewayv2Route#api_id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.routeKey">routeKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#route_key Apigatewayv2Route#route_key}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.apiKeyRequired">apiKeyRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#api_key_required Apigatewayv2Route#api_key_required}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.authorizationScopes">authorizationScopes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#authorization_scopes Apigatewayv2Route#authorization_scopes}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.authorizationType">authorizationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#authorization_type Apigatewayv2Route#authorization_type}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.authorizerId">authorizerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#authorizer_id Apigatewayv2Route#authorizer_id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#id Apigatewayv2Route#id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.modelSelectionExpression">modelSelectionExpression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#model_selection_expression Apigatewayv2Route#model_selection_expression}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.operationName">operationName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#operation_name Apigatewayv2Route#operation_name}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.requestModels">requestModels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#request_models Apigatewayv2Route#request_models}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.requestParameter">requestParameter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter">Apigatewayv2RouteRequestParameter</a>></code> | request_parameter block. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.routeResponseSelectionExpression">routeResponseSelectionExpression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#route_response_selection_expression Apigatewayv2Route#route_response_selection_expression}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.target">target</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#target Apigatewayv2Route#target}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.apiId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#api_id Apigatewayv2Route#api_id}.

---

##### `routeKey`<sup>Required</sup> <a name="routeKey" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.routeKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#route_key Apigatewayv2Route#route_key}.

---

##### `apiKeyRequired`<sup>Optional</sup> <a name="apiKeyRequired" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.apiKeyRequired"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#api_key_required Apigatewayv2Route#api_key_required}.

---

##### `authorizationScopes`<sup>Optional</sup> <a name="authorizationScopes" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.authorizationScopes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#authorization_scopes Apigatewayv2Route#authorization_scopes}.

---

##### `authorizationType`<sup>Optional</sup> <a name="authorizationType" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.authorizationType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#authorization_type Apigatewayv2Route#authorization_type}.

---

##### `authorizerId`<sup>Optional</sup> <a name="authorizerId" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.authorizerId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#authorizer_id Apigatewayv2Route#authorizer_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#id Apigatewayv2Route#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `modelSelectionExpression`<sup>Optional</sup> <a name="modelSelectionExpression" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.modelSelectionExpression"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#model_selection_expression Apigatewayv2Route#model_selection_expression}.

---

##### `operationName`<sup>Optional</sup> <a name="operationName" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.operationName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#operation_name Apigatewayv2Route#operation_name}.

---

##### `requestModels`<sup>Optional</sup> <a name="requestModels" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.requestModels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#request_models Apigatewayv2Route#request_models}.

---

##### `requestParameter`<sup>Optional</sup> <a name="requestParameter" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.requestParameter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter">Apigatewayv2RouteRequestParameter</a>>

request_parameter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#request_parameter Apigatewayv2Route#request_parameter}

---

##### `routeResponseSelectionExpression`<sup>Optional</sup> <a name="routeResponseSelectionExpression" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.routeResponseSelectionExpression"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#route_response_selection_expression Apigatewayv2Route#route_response_selection_expression}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.target"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#target Apigatewayv2Route#target}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.putRequestParameter">putRequestParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetApiKeyRequired">resetApiKeyRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetAuthorizationScopes">resetAuthorizationScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetAuthorizationType">resetAuthorizationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetAuthorizerId">resetAuthorizerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetModelSelectionExpression">resetModelSelectionExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetOperationName">resetOperationName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetRequestModels">resetRequestModels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetRequestParameter">resetRequestParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetRouteResponseSelectionExpression">resetRouteResponseSelectionExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetTarget">resetTarget</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putRequestParameter` <a name="putRequestParameter" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.putRequestParameter"></a>

```java
public void putRequestParameter(IResolvable OR java.util.List<Apigatewayv2RouteRequestParameter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.putRequestParameter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter">Apigatewayv2RouteRequestParameter</a>>

---

##### `resetApiKeyRequired` <a name="resetApiKeyRequired" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetApiKeyRequired"></a>

```java
public void resetApiKeyRequired()
```

##### `resetAuthorizationScopes` <a name="resetAuthorizationScopes" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetAuthorizationScopes"></a>

```java
public void resetAuthorizationScopes()
```

##### `resetAuthorizationType` <a name="resetAuthorizationType" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetAuthorizationType"></a>

```java
public void resetAuthorizationType()
```

##### `resetAuthorizerId` <a name="resetAuthorizerId" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetAuthorizerId"></a>

```java
public void resetAuthorizerId()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetId"></a>

```java
public void resetId()
```

##### `resetModelSelectionExpression` <a name="resetModelSelectionExpression" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetModelSelectionExpression"></a>

```java
public void resetModelSelectionExpression()
```

##### `resetOperationName` <a name="resetOperationName" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetOperationName"></a>

```java
public void resetOperationName()
```

##### `resetRequestModels` <a name="resetRequestModels" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetRequestModels"></a>

```java
public void resetRequestModels()
```

##### `resetRequestParameter` <a name="resetRequestParameter" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetRequestParameter"></a>

```java
public void resetRequestParameter()
```

##### `resetRouteResponseSelectionExpression` <a name="resetRouteResponseSelectionExpression" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetRouteResponseSelectionExpression"></a>

```java
public void resetRouteResponseSelectionExpression()
```

##### `resetTarget` <a name="resetTarget" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetTarget"></a>

```java
public void resetTarget()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.apigatewayv2_route.Apigatewayv2Route;

Apigatewayv2Route.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.apigatewayv2_route.Apigatewayv2Route;

Apigatewayv2Route.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.apigatewayv2_route.Apigatewayv2Route;

Apigatewayv2Route.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.requestParameter">requestParameter</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList">Apigatewayv2RouteRequestParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.apiIdInput">apiIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.apiKeyRequiredInput">apiKeyRequiredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.authorizationScopesInput">authorizationScopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.authorizationTypeInput">authorizationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.authorizerIdInput">authorizerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.modelSelectionExpressionInput">modelSelectionExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.operationNameInput">operationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.requestModelsInput">requestModelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.requestParameterInput">requestParameterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter">Apigatewayv2RouteRequestParameter</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.routeKeyInput">routeKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.routeResponseSelectionExpressionInput">routeResponseSelectionExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.targetInput">targetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.apiId">apiId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.apiKeyRequired">apiKeyRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.authorizationScopes">authorizationScopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.authorizationType">authorizationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.authorizerId">authorizerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.modelSelectionExpression">modelSelectionExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.operationName">operationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.requestModels">requestModels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.routeKey">routeKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.routeResponseSelectionExpression">routeResponseSelectionExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.target">target</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `requestParameter`<sup>Required</sup> <a name="requestParameter" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.requestParameter"></a>

```java
public Apigatewayv2RouteRequestParameterList getRequestParameter();
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList">Apigatewayv2RouteRequestParameterList</a>

---

##### `apiIdInput`<sup>Optional</sup> <a name="apiIdInput" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.apiIdInput"></a>

```java
public java.lang.String getApiIdInput();
```

- *Type:* java.lang.String

---

##### `apiKeyRequiredInput`<sup>Optional</sup> <a name="apiKeyRequiredInput" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.apiKeyRequiredInput"></a>

```java
public java.lang.Object getApiKeyRequiredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `authorizationScopesInput`<sup>Optional</sup> <a name="authorizationScopesInput" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.authorizationScopesInput"></a>

```java
public java.util.List<java.lang.String> getAuthorizationScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authorizationTypeInput`<sup>Optional</sup> <a name="authorizationTypeInput" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.authorizationTypeInput"></a>

```java
public java.lang.String getAuthorizationTypeInput();
```

- *Type:* java.lang.String

---

##### `authorizerIdInput`<sup>Optional</sup> <a name="authorizerIdInput" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.authorizerIdInput"></a>

```java
public java.lang.String getAuthorizerIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `modelSelectionExpressionInput`<sup>Optional</sup> <a name="modelSelectionExpressionInput" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.modelSelectionExpressionInput"></a>

```java
public java.lang.String getModelSelectionExpressionInput();
```

- *Type:* java.lang.String

---

##### `operationNameInput`<sup>Optional</sup> <a name="operationNameInput" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.operationNameInput"></a>

```java
public java.lang.String getOperationNameInput();
```

- *Type:* java.lang.String

---

##### `requestModelsInput`<sup>Optional</sup> <a name="requestModelsInput" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.requestModelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRequestModelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `requestParameterInput`<sup>Optional</sup> <a name="requestParameterInput" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.requestParameterInput"></a>

```java
public java.lang.Object getRequestParameterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter">Apigatewayv2RouteRequestParameter</a>>

---

##### `routeKeyInput`<sup>Optional</sup> <a name="routeKeyInput" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.routeKeyInput"></a>

```java
public java.lang.String getRouteKeyInput();
```

- *Type:* java.lang.String

---

##### `routeResponseSelectionExpressionInput`<sup>Optional</sup> <a name="routeResponseSelectionExpressionInput" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.routeResponseSelectionExpressionInput"></a>

```java
public java.lang.String getRouteResponseSelectionExpressionInput();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.targetInput"></a>

```java
public java.lang.String getTargetInput();
```

- *Type:* java.lang.String

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.apiId"></a>

```java
public java.lang.String getApiId();
```

- *Type:* java.lang.String

---

##### `apiKeyRequired`<sup>Required</sup> <a name="apiKeyRequired" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.apiKeyRequired"></a>

```java
public java.lang.Object getApiKeyRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `authorizationScopes`<sup>Required</sup> <a name="authorizationScopes" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.authorizationScopes"></a>

```java
public java.util.List<java.lang.String> getAuthorizationScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authorizationType`<sup>Required</sup> <a name="authorizationType" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.authorizationType"></a>

```java
public java.lang.String getAuthorizationType();
```

- *Type:* java.lang.String

---

##### `authorizerId`<sup>Required</sup> <a name="authorizerId" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.authorizerId"></a>

```java
public java.lang.String getAuthorizerId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `modelSelectionExpression`<sup>Required</sup> <a name="modelSelectionExpression" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.modelSelectionExpression"></a>

```java
public java.lang.String getModelSelectionExpression();
```

- *Type:* java.lang.String

---

##### `operationName`<sup>Required</sup> <a name="operationName" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.operationName"></a>

```java
public java.lang.String getOperationName();
```

- *Type:* java.lang.String

---

##### `requestModels`<sup>Required</sup> <a name="requestModels" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.requestModels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRequestModels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `routeKey`<sup>Required</sup> <a name="routeKey" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.routeKey"></a>

```java
public java.lang.String getRouteKey();
```

- *Type:* java.lang.String

---

##### `routeResponseSelectionExpression`<sup>Required</sup> <a name="routeResponseSelectionExpression" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.routeResponseSelectionExpression"></a>

```java
public java.lang.String getRouteResponseSelectionExpression();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Apigatewayv2RouteConfig <a name="Apigatewayv2RouteConfig" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apigatewayv2_route.Apigatewayv2RouteConfig;

Apigatewayv2RouteConfig.builder()
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
    .apiId(java.lang.String)
    .routeKey(java.lang.String)
//  .apiKeyRequired(java.lang.Boolean)
//  .apiKeyRequired(IResolvable)
//  .authorizationScopes(java.util.List<java.lang.String>)
//  .authorizationType(java.lang.String)
//  .authorizerId(java.lang.String)
//  .id(java.lang.String)
//  .modelSelectionExpression(java.lang.String)
//  .operationName(java.lang.String)
//  .requestModels(java.util.Map<java.lang.String, java.lang.String>)
//  .requestParameter(IResolvable)
//  .requestParameter(java.util.List<Apigatewayv2RouteRequestParameter>)
//  .routeResponseSelectionExpression(java.lang.String)
//  .target(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.apiId">apiId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#api_id Apigatewayv2Route#api_id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.routeKey">routeKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#route_key Apigatewayv2Route#route_key}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.apiKeyRequired">apiKeyRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#api_key_required Apigatewayv2Route#api_key_required}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.authorizationScopes">authorizationScopes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#authorization_scopes Apigatewayv2Route#authorization_scopes}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.authorizationType">authorizationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#authorization_type Apigatewayv2Route#authorization_type}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.authorizerId">authorizerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#authorizer_id Apigatewayv2Route#authorizer_id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#id Apigatewayv2Route#id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.modelSelectionExpression">modelSelectionExpression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#model_selection_expression Apigatewayv2Route#model_selection_expression}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.operationName">operationName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#operation_name Apigatewayv2Route#operation_name}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.requestModels">requestModels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#request_models Apigatewayv2Route#request_models}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.requestParameter">requestParameter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter">Apigatewayv2RouteRequestParameter</a>></code> | request_parameter block. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.routeResponseSelectionExpression">routeResponseSelectionExpression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#route_response_selection_expression Apigatewayv2Route#route_response_selection_expression}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.target">target</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#target Apigatewayv2Route#target}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.apiId"></a>

```java
public java.lang.String getApiId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#api_id Apigatewayv2Route#api_id}.

---

##### `routeKey`<sup>Required</sup> <a name="routeKey" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.routeKey"></a>

```java
public java.lang.String getRouteKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#route_key Apigatewayv2Route#route_key}.

---

##### `apiKeyRequired`<sup>Optional</sup> <a name="apiKeyRequired" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.apiKeyRequired"></a>

```java
public java.lang.Object getApiKeyRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#api_key_required Apigatewayv2Route#api_key_required}.

---

##### `authorizationScopes`<sup>Optional</sup> <a name="authorizationScopes" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.authorizationScopes"></a>

```java
public java.util.List<java.lang.String> getAuthorizationScopes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#authorization_scopes Apigatewayv2Route#authorization_scopes}.

---

##### `authorizationType`<sup>Optional</sup> <a name="authorizationType" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.authorizationType"></a>

```java
public java.lang.String getAuthorizationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#authorization_type Apigatewayv2Route#authorization_type}.

---

##### `authorizerId`<sup>Optional</sup> <a name="authorizerId" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.authorizerId"></a>

```java
public java.lang.String getAuthorizerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#authorizer_id Apigatewayv2Route#authorizer_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#id Apigatewayv2Route#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `modelSelectionExpression`<sup>Optional</sup> <a name="modelSelectionExpression" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.modelSelectionExpression"></a>

```java
public java.lang.String getModelSelectionExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#model_selection_expression Apigatewayv2Route#model_selection_expression}.

---

##### `operationName`<sup>Optional</sup> <a name="operationName" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.operationName"></a>

```java
public java.lang.String getOperationName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#operation_name Apigatewayv2Route#operation_name}.

---

##### `requestModels`<sup>Optional</sup> <a name="requestModels" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.requestModels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRequestModels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#request_models Apigatewayv2Route#request_models}.

---

##### `requestParameter`<sup>Optional</sup> <a name="requestParameter" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.requestParameter"></a>

```java
public java.lang.Object getRequestParameter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter">Apigatewayv2RouteRequestParameter</a>>

request_parameter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#request_parameter Apigatewayv2Route#request_parameter}

---

##### `routeResponseSelectionExpression`<sup>Optional</sup> <a name="routeResponseSelectionExpression" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.routeResponseSelectionExpression"></a>

```java
public java.lang.String getRouteResponseSelectionExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#route_response_selection_expression Apigatewayv2Route#route_response_selection_expression}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#target Apigatewayv2Route#target}.

---

### Apigatewayv2RouteRequestParameter <a name="Apigatewayv2RouteRequestParameter" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apigatewayv2_route.Apigatewayv2RouteRequestParameter;

Apigatewayv2RouteRequestParameter.builder()
    .requestParameterKey(java.lang.String)
    .required(java.lang.Boolean)
    .required(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter.property.requestParameterKey">requestParameterKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#request_parameter_key Apigatewayv2Route#request_parameter_key}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter.property.required">required</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#required Apigatewayv2Route#required}. |

---

##### `requestParameterKey`<sup>Required</sup> <a name="requestParameterKey" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter.property.requestParameterKey"></a>

```java
public java.lang.String getRequestParameterKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#request_parameter_key Apigatewayv2Route#request_parameter_key}.

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter.property.required"></a>

```java
public java.lang.Object getRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_route#required Apigatewayv2Route#required}.

---

## Classes <a name="Classes" id="Classes"></a>

### Apigatewayv2RouteRequestParameterList <a name="Apigatewayv2RouteRequestParameterList" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apigatewayv2_route.Apigatewayv2RouteRequestParameterList;

new Apigatewayv2RouteRequestParameterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.get"></a>

```java
public Apigatewayv2RouteRequestParameterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter">Apigatewayv2RouteRequestParameter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter">Apigatewayv2RouteRequestParameter</a>>

---


### Apigatewayv2RouteRequestParameterOutputReference <a name="Apigatewayv2RouteRequestParameterOutputReference" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apigatewayv2_route.Apigatewayv2RouteRequestParameterOutputReference;

new Apigatewayv2RouteRequestParameterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.property.requestParameterKeyInput">requestParameterKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.property.requiredInput">requiredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.property.requestParameterKey">requestParameterKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.property.required">required</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter">Apigatewayv2RouteRequestParameter</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `requestParameterKeyInput`<sup>Optional</sup> <a name="requestParameterKeyInput" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.property.requestParameterKeyInput"></a>

```java
public java.lang.String getRequestParameterKeyInput();
```

- *Type:* java.lang.String

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.property.requiredInput"></a>

```java
public java.lang.Object getRequiredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `requestParameterKey`<sup>Required</sup> <a name="requestParameterKey" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.property.requestParameterKey"></a>

```java
public java.lang.String getRequestParameterKey();
```

- *Type:* java.lang.String

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.property.required"></a>

```java
public java.lang.Object getRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter">Apigatewayv2RouteRequestParameter</a> OR com.hashicorp.cdktf.IResolvable

---



