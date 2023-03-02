# `apiGatewayAuthorizer` Submodule <a name="`apiGatewayAuthorizer` Submodule" id="@cdktf/provider-aws.apiGatewayAuthorizer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiGatewayAuthorizer <a name="ApiGatewayAuthorizer" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer aws_api_gateway_authorizer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_authorizer.ApiGatewayAuthorizer;

ApiGatewayAuthorizer.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .restApiId(java.lang.String)
//  .authorizerCredentials(java.lang.String)
//  .authorizerResultTtlInSeconds(java.lang.Number)
//  .authorizerUri(java.lang.String)
//  .id(java.lang.String)
//  .identitySource(java.lang.String)
//  .identityValidationExpression(java.lang.String)
//  .providerArns(java.util.List<java.lang.String>)
//  .type(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#name ApiGatewayAuthorizer#name}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.restApiId">restApiId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#rest_api_id ApiGatewayAuthorizer#rest_api_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.authorizerCredentials">authorizerCredentials</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#authorizer_credentials ApiGatewayAuthorizer#authorizer_credentials}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.authorizerResultTtlInSeconds">authorizerResultTtlInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#authorizer_result_ttl_in_seconds ApiGatewayAuthorizer#authorizer_result_ttl_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.authorizerUri">authorizerUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#authorizer_uri ApiGatewayAuthorizer#authorizer_uri}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#id ApiGatewayAuthorizer#id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.identitySource">identitySource</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#identity_source ApiGatewayAuthorizer#identity_source}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.identityValidationExpression">identityValidationExpression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#identity_validation_expression ApiGatewayAuthorizer#identity_validation_expression}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.providerArns">providerArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#provider_arns ApiGatewayAuthorizer#provider_arns}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#type ApiGatewayAuthorizer#type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#name ApiGatewayAuthorizer#name}.

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.restApiId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#rest_api_id ApiGatewayAuthorizer#rest_api_id}.

---

##### `authorizerCredentials`<sup>Optional</sup> <a name="authorizerCredentials" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.authorizerCredentials"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#authorizer_credentials ApiGatewayAuthorizer#authorizer_credentials}.

---

##### `authorizerResultTtlInSeconds`<sup>Optional</sup> <a name="authorizerResultTtlInSeconds" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.authorizerResultTtlInSeconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#authorizer_result_ttl_in_seconds ApiGatewayAuthorizer#authorizer_result_ttl_in_seconds}.

---

##### `authorizerUri`<sup>Optional</sup> <a name="authorizerUri" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.authorizerUri"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#authorizer_uri ApiGatewayAuthorizer#authorizer_uri}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#id ApiGatewayAuthorizer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identitySource`<sup>Optional</sup> <a name="identitySource" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.identitySource"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#identity_source ApiGatewayAuthorizer#identity_source}.

---

##### `identityValidationExpression`<sup>Optional</sup> <a name="identityValidationExpression" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.identityValidationExpression"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#identity_validation_expression ApiGatewayAuthorizer#identity_validation_expression}.

---

##### `providerArns`<sup>Optional</sup> <a name="providerArns" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.providerArns"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#provider_arns ApiGatewayAuthorizer#provider_arns}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#type ApiGatewayAuthorizer#type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.resetAuthorizerCredentials">resetAuthorizerCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.resetAuthorizerResultTtlInSeconds">resetAuthorizerResultTtlInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.resetAuthorizerUri">resetAuthorizerUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.resetIdentitySource">resetIdentitySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.resetIdentityValidationExpression">resetIdentityValidationExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.resetProviderArns">resetProviderArns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAuthorizerCredentials` <a name="resetAuthorizerCredentials" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.resetAuthorizerCredentials"></a>

```java
public void resetAuthorizerCredentials()
```

##### `resetAuthorizerResultTtlInSeconds` <a name="resetAuthorizerResultTtlInSeconds" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.resetAuthorizerResultTtlInSeconds"></a>

```java
public void resetAuthorizerResultTtlInSeconds()
```

##### `resetAuthorizerUri` <a name="resetAuthorizerUri" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.resetAuthorizerUri"></a>

```java
public void resetAuthorizerUri()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.resetId"></a>

```java
public void resetId()
```

##### `resetIdentitySource` <a name="resetIdentitySource" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.resetIdentitySource"></a>

```java
public void resetIdentitySource()
```

##### `resetIdentityValidationExpression` <a name="resetIdentityValidationExpression" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.resetIdentityValidationExpression"></a>

```java
public void resetIdentityValidationExpression()
```

##### `resetProviderArns` <a name="resetProviderArns" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.resetProviderArns"></a>

```java
public void resetProviderArns()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.resetType"></a>

```java
public void resetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_authorizer.ApiGatewayAuthorizer;

ApiGatewayAuthorizer.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_authorizer.ApiGatewayAuthorizer;

ApiGatewayAuthorizer.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_authorizer.ApiGatewayAuthorizer;

ApiGatewayAuthorizer.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.authorizerCredentialsInput">authorizerCredentialsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.authorizerResultTtlInSecondsInput">authorizerResultTtlInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.authorizerUriInput">authorizerUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.identitySourceInput">identitySourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.identityValidationExpressionInput">identityValidationExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.providerArnsInput">providerArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.restApiIdInput">restApiIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.authorizerCredentials">authorizerCredentials</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.authorizerResultTtlInSeconds">authorizerResultTtlInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.authorizerUri">authorizerUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.identitySource">identitySource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.identityValidationExpression">identityValidationExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.providerArns">providerArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.restApiId">restApiId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `authorizerCredentialsInput`<sup>Optional</sup> <a name="authorizerCredentialsInput" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.authorizerCredentialsInput"></a>

```java
public java.lang.String getAuthorizerCredentialsInput();
```

- *Type:* java.lang.String

---

##### `authorizerResultTtlInSecondsInput`<sup>Optional</sup> <a name="authorizerResultTtlInSecondsInput" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.authorizerResultTtlInSecondsInput"></a>

```java
public java.lang.Number getAuthorizerResultTtlInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `authorizerUriInput`<sup>Optional</sup> <a name="authorizerUriInput" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.authorizerUriInput"></a>

```java
public java.lang.String getAuthorizerUriInput();
```

- *Type:* java.lang.String

---

##### `identitySourceInput`<sup>Optional</sup> <a name="identitySourceInput" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.identitySourceInput"></a>

```java
public java.lang.String getIdentitySourceInput();
```

- *Type:* java.lang.String

---

##### `identityValidationExpressionInput`<sup>Optional</sup> <a name="identityValidationExpressionInput" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.identityValidationExpressionInput"></a>

```java
public java.lang.String getIdentityValidationExpressionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `providerArnsInput`<sup>Optional</sup> <a name="providerArnsInput" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.providerArnsInput"></a>

```java
public java.util.List<java.lang.String> getProviderArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `restApiIdInput`<sup>Optional</sup> <a name="restApiIdInput" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.restApiIdInput"></a>

```java
public java.lang.String getRestApiIdInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `authorizerCredentials`<sup>Required</sup> <a name="authorizerCredentials" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.authorizerCredentials"></a>

```java
public java.lang.String getAuthorizerCredentials();
```

- *Type:* java.lang.String

---

##### `authorizerResultTtlInSeconds`<sup>Required</sup> <a name="authorizerResultTtlInSeconds" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.authorizerResultTtlInSeconds"></a>

```java
public java.lang.Number getAuthorizerResultTtlInSeconds();
```

- *Type:* java.lang.Number

---

##### `authorizerUri`<sup>Required</sup> <a name="authorizerUri" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.authorizerUri"></a>

```java
public java.lang.String getAuthorizerUri();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `identitySource`<sup>Required</sup> <a name="identitySource" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.identitySource"></a>

```java
public java.lang.String getIdentitySource();
```

- *Type:* java.lang.String

---

##### `identityValidationExpression`<sup>Required</sup> <a name="identityValidationExpression" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.identityValidationExpression"></a>

```java
public java.lang.String getIdentityValidationExpression();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `providerArns`<sup>Required</sup> <a name="providerArns" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.providerArns"></a>

```java
public java.util.List<java.lang.String> getProviderArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.restApiId"></a>

```java
public java.lang.String getRestApiId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizer.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApiGatewayAuthorizerConfig <a name="ApiGatewayAuthorizerConfig" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_authorizer.ApiGatewayAuthorizerConfig;

ApiGatewayAuthorizerConfig.builder()
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
    .name(java.lang.String)
    .restApiId(java.lang.String)
//  .authorizerCredentials(java.lang.String)
//  .authorizerResultTtlInSeconds(java.lang.Number)
//  .authorizerUri(java.lang.String)
//  .id(java.lang.String)
//  .identitySource(java.lang.String)
//  .identityValidationExpression(java.lang.String)
//  .providerArns(java.util.List<java.lang.String>)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#name ApiGatewayAuthorizer#name}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.restApiId">restApiId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#rest_api_id ApiGatewayAuthorizer#rest_api_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.authorizerCredentials">authorizerCredentials</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#authorizer_credentials ApiGatewayAuthorizer#authorizer_credentials}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.authorizerResultTtlInSeconds">authorizerResultTtlInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#authorizer_result_ttl_in_seconds ApiGatewayAuthorizer#authorizer_result_ttl_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.authorizerUri">authorizerUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#authorizer_uri ApiGatewayAuthorizer#authorizer_uri}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#id ApiGatewayAuthorizer#id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.identitySource">identitySource</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#identity_source ApiGatewayAuthorizer#identity_source}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.identityValidationExpression">identityValidationExpression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#identity_validation_expression ApiGatewayAuthorizer#identity_validation_expression}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.providerArns">providerArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#provider_arns ApiGatewayAuthorizer#provider_arns}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#type ApiGatewayAuthorizer#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#name ApiGatewayAuthorizer#name}.

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.restApiId"></a>

```java
public java.lang.String getRestApiId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#rest_api_id ApiGatewayAuthorizer#rest_api_id}.

---

##### `authorizerCredentials`<sup>Optional</sup> <a name="authorizerCredentials" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.authorizerCredentials"></a>

```java
public java.lang.String getAuthorizerCredentials();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#authorizer_credentials ApiGatewayAuthorizer#authorizer_credentials}.

---

##### `authorizerResultTtlInSeconds`<sup>Optional</sup> <a name="authorizerResultTtlInSeconds" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.authorizerResultTtlInSeconds"></a>

```java
public java.lang.Number getAuthorizerResultTtlInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#authorizer_result_ttl_in_seconds ApiGatewayAuthorizer#authorizer_result_ttl_in_seconds}.

---

##### `authorizerUri`<sup>Optional</sup> <a name="authorizerUri" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.authorizerUri"></a>

```java
public java.lang.String getAuthorizerUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#authorizer_uri ApiGatewayAuthorizer#authorizer_uri}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#id ApiGatewayAuthorizer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identitySource`<sup>Optional</sup> <a name="identitySource" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.identitySource"></a>

```java
public java.lang.String getIdentitySource();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#identity_source ApiGatewayAuthorizer#identity_source}.

---

##### `identityValidationExpression`<sup>Optional</sup> <a name="identityValidationExpression" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.identityValidationExpression"></a>

```java
public java.lang.String getIdentityValidationExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#identity_validation_expression ApiGatewayAuthorizer#identity_validation_expression}.

---

##### `providerArns`<sup>Optional</sup> <a name="providerArns" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.providerArns"></a>

```java
public java.util.List<java.lang.String> getProviderArns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#provider_arns ApiGatewayAuthorizer#provider_arns}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.apiGatewayAuthorizer.ApiGatewayAuthorizerConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer#type ApiGatewayAuthorizer#type}.

---



