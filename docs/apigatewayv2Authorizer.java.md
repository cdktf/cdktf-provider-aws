# `apigatewayv2Authorizer` Submodule <a name="`apigatewayv2Authorizer` Submodule" id="@cdktf/provider-aws.apigatewayv2Authorizer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Apigatewayv2Authorizer <a name="Apigatewayv2Authorizer" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer aws_apigatewayv2_authorizer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apigatewayv2_authorizer.Apigatewayv2Authorizer;

Apigatewayv2Authorizer.Builder.create(Construct scope, java.lang.String id)
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
    .authorizerType(java.lang.String)
    .name(java.lang.String)
//  .authorizerCredentialsArn(java.lang.String)
//  .authorizerPayloadFormatVersion(java.lang.String)
//  .authorizerResultTtlInSeconds(java.lang.Number)
//  .authorizerUri(java.lang.String)
//  .enableSimpleResponses(java.lang.Boolean)
//  .enableSimpleResponses(IResolvable)
//  .id(java.lang.String)
//  .identitySources(java.util.List<java.lang.String>)
//  .jwtConfiguration(Apigatewayv2AuthorizerJwtConfiguration)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.apiId">apiId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#api_id Apigatewayv2Authorizer#api_id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.authorizerType">authorizerType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#authorizer_type Apigatewayv2Authorizer#authorizer_type}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#name Apigatewayv2Authorizer#name}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.authorizerCredentialsArn">authorizerCredentialsArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#authorizer_credentials_arn Apigatewayv2Authorizer#authorizer_credentials_arn}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.authorizerPayloadFormatVersion">authorizerPayloadFormatVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#authorizer_payload_format_version Apigatewayv2Authorizer#authorizer_payload_format_version}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.authorizerResultTtlInSeconds">authorizerResultTtlInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#authorizer_result_ttl_in_seconds Apigatewayv2Authorizer#authorizer_result_ttl_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.authorizerUri">authorizerUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#authorizer_uri Apigatewayv2Authorizer#authorizer_uri}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.enableSimpleResponses">enableSimpleResponses</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#enable_simple_responses Apigatewayv2Authorizer#enable_simple_responses}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#id Apigatewayv2Authorizer#id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.identitySources">identitySources</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#identity_sources Apigatewayv2Authorizer#identity_sources}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.jwtConfiguration">jwtConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration">Apigatewayv2AuthorizerJwtConfiguration</a></code> | jwt_configuration block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.apiId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#api_id Apigatewayv2Authorizer#api_id}.

---

##### `authorizerType`<sup>Required</sup> <a name="authorizerType" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.authorizerType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#authorizer_type Apigatewayv2Authorizer#authorizer_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#name Apigatewayv2Authorizer#name}.

---

##### `authorizerCredentialsArn`<sup>Optional</sup> <a name="authorizerCredentialsArn" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.authorizerCredentialsArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#authorizer_credentials_arn Apigatewayv2Authorizer#authorizer_credentials_arn}.

---

##### `authorizerPayloadFormatVersion`<sup>Optional</sup> <a name="authorizerPayloadFormatVersion" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.authorizerPayloadFormatVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#authorizer_payload_format_version Apigatewayv2Authorizer#authorizer_payload_format_version}.

---

##### `authorizerResultTtlInSeconds`<sup>Optional</sup> <a name="authorizerResultTtlInSeconds" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.authorizerResultTtlInSeconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#authorizer_result_ttl_in_seconds Apigatewayv2Authorizer#authorizer_result_ttl_in_seconds}.

---

##### `authorizerUri`<sup>Optional</sup> <a name="authorizerUri" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.authorizerUri"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#authorizer_uri Apigatewayv2Authorizer#authorizer_uri}.

---

##### `enableSimpleResponses`<sup>Optional</sup> <a name="enableSimpleResponses" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.enableSimpleResponses"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#enable_simple_responses Apigatewayv2Authorizer#enable_simple_responses}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#id Apigatewayv2Authorizer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identitySources`<sup>Optional</sup> <a name="identitySources" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.identitySources"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#identity_sources Apigatewayv2Authorizer#identity_sources}.

---

##### `jwtConfiguration`<sup>Optional</sup> <a name="jwtConfiguration" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.Initializer.parameter.jwtConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration">Apigatewayv2AuthorizerJwtConfiguration</a>

jwt_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#jwt_configuration Apigatewayv2Authorizer#jwt_configuration}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.putJwtConfiguration">putJwtConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetAuthorizerCredentialsArn">resetAuthorizerCredentialsArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetAuthorizerPayloadFormatVersion">resetAuthorizerPayloadFormatVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetAuthorizerResultTtlInSeconds">resetAuthorizerResultTtlInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetAuthorizerUri">resetAuthorizerUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetEnableSimpleResponses">resetEnableSimpleResponses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetIdentitySources">resetIdentitySources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetJwtConfiguration">resetJwtConfiguration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putJwtConfiguration` <a name="putJwtConfiguration" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.putJwtConfiguration"></a>

```java
public void putJwtConfiguration(Apigatewayv2AuthorizerJwtConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.putJwtConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration">Apigatewayv2AuthorizerJwtConfiguration</a>

---

##### `resetAuthorizerCredentialsArn` <a name="resetAuthorizerCredentialsArn" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetAuthorizerCredentialsArn"></a>

```java
public void resetAuthorizerCredentialsArn()
```

##### `resetAuthorizerPayloadFormatVersion` <a name="resetAuthorizerPayloadFormatVersion" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetAuthorizerPayloadFormatVersion"></a>

```java
public void resetAuthorizerPayloadFormatVersion()
```

##### `resetAuthorizerResultTtlInSeconds` <a name="resetAuthorizerResultTtlInSeconds" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetAuthorizerResultTtlInSeconds"></a>

```java
public void resetAuthorizerResultTtlInSeconds()
```

##### `resetAuthorizerUri` <a name="resetAuthorizerUri" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetAuthorizerUri"></a>

```java
public void resetAuthorizerUri()
```

##### `resetEnableSimpleResponses` <a name="resetEnableSimpleResponses" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetEnableSimpleResponses"></a>

```java
public void resetEnableSimpleResponses()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetId"></a>

```java
public void resetId()
```

##### `resetIdentitySources` <a name="resetIdentitySources" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetIdentitySources"></a>

```java
public void resetIdentitySources()
```

##### `resetJwtConfiguration` <a name="resetJwtConfiguration" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.resetJwtConfiguration"></a>

```java
public void resetJwtConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.apigatewayv2_authorizer.Apigatewayv2Authorizer;

Apigatewayv2Authorizer.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.apigatewayv2_authorizer.Apigatewayv2Authorizer;

Apigatewayv2Authorizer.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.apigatewayv2_authorizer.Apigatewayv2Authorizer;

Apigatewayv2Authorizer.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.jwtConfiguration">jwtConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference">Apigatewayv2AuthorizerJwtConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.apiIdInput">apiIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerCredentialsArnInput">authorizerCredentialsArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerPayloadFormatVersionInput">authorizerPayloadFormatVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerResultTtlInSecondsInput">authorizerResultTtlInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerTypeInput">authorizerTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerUriInput">authorizerUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.enableSimpleResponsesInput">enableSimpleResponsesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.identitySourcesInput">identitySourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.jwtConfigurationInput">jwtConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration">Apigatewayv2AuthorizerJwtConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.apiId">apiId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerCredentialsArn">authorizerCredentialsArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerPayloadFormatVersion">authorizerPayloadFormatVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerResultTtlInSeconds">authorizerResultTtlInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerType">authorizerType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerUri">authorizerUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.enableSimpleResponses">enableSimpleResponses</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.identitySources">identitySources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `jwtConfiguration`<sup>Required</sup> <a name="jwtConfiguration" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.jwtConfiguration"></a>

```java
public Apigatewayv2AuthorizerJwtConfigurationOutputReference getJwtConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference">Apigatewayv2AuthorizerJwtConfigurationOutputReference</a>

---

##### `apiIdInput`<sup>Optional</sup> <a name="apiIdInput" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.apiIdInput"></a>

```java
public java.lang.String getApiIdInput();
```

- *Type:* java.lang.String

---

##### `authorizerCredentialsArnInput`<sup>Optional</sup> <a name="authorizerCredentialsArnInput" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerCredentialsArnInput"></a>

```java
public java.lang.String getAuthorizerCredentialsArnInput();
```

- *Type:* java.lang.String

---

##### `authorizerPayloadFormatVersionInput`<sup>Optional</sup> <a name="authorizerPayloadFormatVersionInput" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerPayloadFormatVersionInput"></a>

```java
public java.lang.String getAuthorizerPayloadFormatVersionInput();
```

- *Type:* java.lang.String

---

##### `authorizerResultTtlInSecondsInput`<sup>Optional</sup> <a name="authorizerResultTtlInSecondsInput" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerResultTtlInSecondsInput"></a>

```java
public java.lang.Number getAuthorizerResultTtlInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `authorizerTypeInput`<sup>Optional</sup> <a name="authorizerTypeInput" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerTypeInput"></a>

```java
public java.lang.String getAuthorizerTypeInput();
```

- *Type:* java.lang.String

---

##### `authorizerUriInput`<sup>Optional</sup> <a name="authorizerUriInput" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerUriInput"></a>

```java
public java.lang.String getAuthorizerUriInput();
```

- *Type:* java.lang.String

---

##### `enableSimpleResponsesInput`<sup>Optional</sup> <a name="enableSimpleResponsesInput" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.enableSimpleResponsesInput"></a>

```java
public java.lang.Object getEnableSimpleResponsesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `identitySourcesInput`<sup>Optional</sup> <a name="identitySourcesInput" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.identitySourcesInput"></a>

```java
public java.util.List<java.lang.String> getIdentitySourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `jwtConfigurationInput`<sup>Optional</sup> <a name="jwtConfigurationInput" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.jwtConfigurationInput"></a>

```java
public Apigatewayv2AuthorizerJwtConfiguration getJwtConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration">Apigatewayv2AuthorizerJwtConfiguration</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.apiId"></a>

```java
public java.lang.String getApiId();
```

- *Type:* java.lang.String

---

##### `authorizerCredentialsArn`<sup>Required</sup> <a name="authorizerCredentialsArn" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerCredentialsArn"></a>

```java
public java.lang.String getAuthorizerCredentialsArn();
```

- *Type:* java.lang.String

---

##### `authorizerPayloadFormatVersion`<sup>Required</sup> <a name="authorizerPayloadFormatVersion" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerPayloadFormatVersion"></a>

```java
public java.lang.String getAuthorizerPayloadFormatVersion();
```

- *Type:* java.lang.String

---

##### `authorizerResultTtlInSeconds`<sup>Required</sup> <a name="authorizerResultTtlInSeconds" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerResultTtlInSeconds"></a>

```java
public java.lang.Number getAuthorizerResultTtlInSeconds();
```

- *Type:* java.lang.Number

---

##### `authorizerType`<sup>Required</sup> <a name="authorizerType" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerType"></a>

```java
public java.lang.String getAuthorizerType();
```

- *Type:* java.lang.String

---

##### `authorizerUri`<sup>Required</sup> <a name="authorizerUri" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.authorizerUri"></a>

```java
public java.lang.String getAuthorizerUri();
```

- *Type:* java.lang.String

---

##### `enableSimpleResponses`<sup>Required</sup> <a name="enableSimpleResponses" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.enableSimpleResponses"></a>

```java
public java.lang.Object getEnableSimpleResponses();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `identitySources`<sup>Required</sup> <a name="identitySources" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.identitySources"></a>

```java
public java.util.List<java.lang.String> getIdentitySources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2Authorizer.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Apigatewayv2AuthorizerConfig <a name="Apigatewayv2AuthorizerConfig" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apigatewayv2_authorizer.Apigatewayv2AuthorizerConfig;

Apigatewayv2AuthorizerConfig.builder()
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
    .authorizerType(java.lang.String)
    .name(java.lang.String)
//  .authorizerCredentialsArn(java.lang.String)
//  .authorizerPayloadFormatVersion(java.lang.String)
//  .authorizerResultTtlInSeconds(java.lang.Number)
//  .authorizerUri(java.lang.String)
//  .enableSimpleResponses(java.lang.Boolean)
//  .enableSimpleResponses(IResolvable)
//  .id(java.lang.String)
//  .identitySources(java.util.List<java.lang.String>)
//  .jwtConfiguration(Apigatewayv2AuthorizerJwtConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.apiId">apiId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#api_id Apigatewayv2Authorizer#api_id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.authorizerType">authorizerType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#authorizer_type Apigatewayv2Authorizer#authorizer_type}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#name Apigatewayv2Authorizer#name}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.authorizerCredentialsArn">authorizerCredentialsArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#authorizer_credentials_arn Apigatewayv2Authorizer#authorizer_credentials_arn}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.authorizerPayloadFormatVersion">authorizerPayloadFormatVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#authorizer_payload_format_version Apigatewayv2Authorizer#authorizer_payload_format_version}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.authorizerResultTtlInSeconds">authorizerResultTtlInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#authorizer_result_ttl_in_seconds Apigatewayv2Authorizer#authorizer_result_ttl_in_seconds}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.authorizerUri">authorizerUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#authorizer_uri Apigatewayv2Authorizer#authorizer_uri}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.enableSimpleResponses">enableSimpleResponses</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#enable_simple_responses Apigatewayv2Authorizer#enable_simple_responses}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#id Apigatewayv2Authorizer#id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.identitySources">identitySources</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#identity_sources Apigatewayv2Authorizer#identity_sources}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.jwtConfiguration">jwtConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration">Apigatewayv2AuthorizerJwtConfiguration</a></code> | jwt_configuration block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.apiId"></a>

```java
public java.lang.String getApiId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#api_id Apigatewayv2Authorizer#api_id}.

---

##### `authorizerType`<sup>Required</sup> <a name="authorizerType" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.authorizerType"></a>

```java
public java.lang.String getAuthorizerType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#authorizer_type Apigatewayv2Authorizer#authorizer_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#name Apigatewayv2Authorizer#name}.

---

##### `authorizerCredentialsArn`<sup>Optional</sup> <a name="authorizerCredentialsArn" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.authorizerCredentialsArn"></a>

```java
public java.lang.String getAuthorizerCredentialsArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#authorizer_credentials_arn Apigatewayv2Authorizer#authorizer_credentials_arn}.

---

##### `authorizerPayloadFormatVersion`<sup>Optional</sup> <a name="authorizerPayloadFormatVersion" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.authorizerPayloadFormatVersion"></a>

```java
public java.lang.String getAuthorizerPayloadFormatVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#authorizer_payload_format_version Apigatewayv2Authorizer#authorizer_payload_format_version}.

---

##### `authorizerResultTtlInSeconds`<sup>Optional</sup> <a name="authorizerResultTtlInSeconds" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.authorizerResultTtlInSeconds"></a>

```java
public java.lang.Number getAuthorizerResultTtlInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#authorizer_result_ttl_in_seconds Apigatewayv2Authorizer#authorizer_result_ttl_in_seconds}.

---

##### `authorizerUri`<sup>Optional</sup> <a name="authorizerUri" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.authorizerUri"></a>

```java
public java.lang.String getAuthorizerUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#authorizer_uri Apigatewayv2Authorizer#authorizer_uri}.

---

##### `enableSimpleResponses`<sup>Optional</sup> <a name="enableSimpleResponses" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.enableSimpleResponses"></a>

```java
public java.lang.Object getEnableSimpleResponses();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#enable_simple_responses Apigatewayv2Authorizer#enable_simple_responses}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#id Apigatewayv2Authorizer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identitySources`<sup>Optional</sup> <a name="identitySources" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.identitySources"></a>

```java
public java.util.List<java.lang.String> getIdentitySources();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#identity_sources Apigatewayv2Authorizer#identity_sources}.

---

##### `jwtConfiguration`<sup>Optional</sup> <a name="jwtConfiguration" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerConfig.property.jwtConfiguration"></a>

```java
public Apigatewayv2AuthorizerJwtConfiguration getJwtConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration">Apigatewayv2AuthorizerJwtConfiguration</a>

jwt_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#jwt_configuration Apigatewayv2Authorizer#jwt_configuration}

---

### Apigatewayv2AuthorizerJwtConfiguration <a name="Apigatewayv2AuthorizerJwtConfiguration" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apigatewayv2_authorizer.Apigatewayv2AuthorizerJwtConfiguration;

Apigatewayv2AuthorizerJwtConfiguration.builder()
//  .audience(java.util.List<java.lang.String>)
//  .issuer(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration.property.audience">audience</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#audience Apigatewayv2Authorizer#audience}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration.property.issuer">issuer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#issuer Apigatewayv2Authorizer#issuer}. |

---

##### `audience`<sup>Optional</sup> <a name="audience" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration.property.audience"></a>

```java
public java.util.List<java.lang.String> getAudience();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#audience Apigatewayv2Authorizer#audience}.

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_authorizer#issuer Apigatewayv2Authorizer#issuer}.

---

## Classes <a name="Classes" id="Classes"></a>

### Apigatewayv2AuthorizerJwtConfigurationOutputReference <a name="Apigatewayv2AuthorizerJwtConfigurationOutputReference" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.apigatewayv2_authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference;

new Apigatewayv2AuthorizerJwtConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.resetAudience">resetAudience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.resetIssuer">resetIssuer</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAudience` <a name="resetAudience" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.resetAudience"></a>

```java
public void resetAudience()
```

##### `resetIssuer` <a name="resetIssuer" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.resetIssuer"></a>

```java
public void resetIssuer()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.property.audienceInput">audienceInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.property.issuerInput">issuerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.property.audience">audience</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.property.issuer">issuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration">Apigatewayv2AuthorizerJwtConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `audienceInput`<sup>Optional</sup> <a name="audienceInput" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.property.audienceInput"></a>

```java
public java.util.List<java.lang.String> getAudienceInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.property.issuerInput"></a>

```java
public java.lang.String getIssuerInput();
```

- *Type:* java.lang.String

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.property.audience"></a>

```java
public java.util.List<java.lang.String> getAudience();
```

- *Type:* java.util.List<java.lang.String>

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfigurationOutputReference.property.internalValue"></a>

```java
public Apigatewayv2AuthorizerJwtConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Authorizer.Apigatewayv2AuthorizerJwtConfiguration">Apigatewayv2AuthorizerJwtConfiguration</a>

---



