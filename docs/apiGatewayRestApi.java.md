# `apiGatewayRestApi` Submodule <a name="`apiGatewayRestApi` Submodule" id="@cdktf/provider-aws.apiGatewayRestApi"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiGatewayRestApi <a name="ApiGatewayRestApi" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api aws_api_gateway_rest_api}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_rest_api.ApiGatewayRestApi;

ApiGatewayRestApi.Builder.create(Construct scope, java.lang.String id)
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
//  .apiKeySource(java.lang.String)
//  .binaryMediaTypes(java.util.List<java.lang.String>)
//  .body(java.lang.String)
//  .description(java.lang.String)
//  .disableExecuteApiEndpoint(java.lang.Boolean)
//  .disableExecuteApiEndpoint(IResolvable)
//  .endpointConfiguration(ApiGatewayRestApiEndpointConfiguration)
//  .id(java.lang.String)
//  .minimumCompressionSize(java.lang.Number)
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
//  .policy(java.lang.String)
//  .putRestApiMode(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#name ApiGatewayRestApi#name}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.apiKeySource">apiKeySource</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#api_key_source ApiGatewayRestApi#api_key_source}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.binaryMediaTypes">binaryMediaTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#binary_media_types ApiGatewayRestApi#binary_media_types}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.body">body</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#body ApiGatewayRestApi#body}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#description ApiGatewayRestApi#description}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.disableExecuteApiEndpoint">disableExecuteApiEndpoint</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#disable_execute_api_endpoint ApiGatewayRestApi#disable_execute_api_endpoint}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.endpointConfiguration">endpointConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration">ApiGatewayRestApiEndpointConfiguration</a></code> | endpoint_configuration block. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#id ApiGatewayRestApi#id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.minimumCompressionSize">minimumCompressionSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#minimum_compression_size ApiGatewayRestApi#minimum_compression_size}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#parameters ApiGatewayRestApi#parameters}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.policy">policy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#policy ApiGatewayRestApi#policy}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.putRestApiMode">putRestApiMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#put_rest_api_mode ApiGatewayRestApi#put_rest_api_mode}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#tags ApiGatewayRestApi#tags}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#tags_all ApiGatewayRestApi#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#name ApiGatewayRestApi#name}.

---

##### `apiKeySource`<sup>Optional</sup> <a name="apiKeySource" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.apiKeySource"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#api_key_source ApiGatewayRestApi#api_key_source}.

---

##### `binaryMediaTypes`<sup>Optional</sup> <a name="binaryMediaTypes" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.binaryMediaTypes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#binary_media_types ApiGatewayRestApi#binary_media_types}.

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.body"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#body ApiGatewayRestApi#body}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#description ApiGatewayRestApi#description}.

---

##### `disableExecuteApiEndpoint`<sup>Optional</sup> <a name="disableExecuteApiEndpoint" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.disableExecuteApiEndpoint"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#disable_execute_api_endpoint ApiGatewayRestApi#disable_execute_api_endpoint}.

---

##### `endpointConfiguration`<sup>Optional</sup> <a name="endpointConfiguration" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.endpointConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration">ApiGatewayRestApiEndpointConfiguration</a>

endpoint_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#endpoint_configuration ApiGatewayRestApi#endpoint_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#id ApiGatewayRestApi#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `minimumCompressionSize`<sup>Optional</sup> <a name="minimumCompressionSize" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.minimumCompressionSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#minimum_compression_size ApiGatewayRestApi#minimum_compression_size}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.parameters"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#parameters ApiGatewayRestApi#parameters}.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.policy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#policy ApiGatewayRestApi#policy}.

---

##### `putRestApiMode`<sup>Optional</sup> <a name="putRestApiMode" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.putRestApiMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#put_rest_api_mode ApiGatewayRestApi#put_rest_api_mode}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#tags ApiGatewayRestApi#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#tags_all ApiGatewayRestApi#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.putEndpointConfiguration">putEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetApiKeySource">resetApiKeySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetBinaryMediaTypes">resetBinaryMediaTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetBody">resetBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetDisableExecuteApiEndpoint">resetDisableExecuteApiEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetEndpointConfiguration">resetEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetMinimumCompressionSize">resetMinimumCompressionSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetPolicy">resetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetPutRestApiMode">resetPutRestApiMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putEndpointConfiguration` <a name="putEndpointConfiguration" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.putEndpointConfiguration"></a>

```java
public void putEndpointConfiguration(ApiGatewayRestApiEndpointConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.putEndpointConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration">ApiGatewayRestApiEndpointConfiguration</a>

---

##### `resetApiKeySource` <a name="resetApiKeySource" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetApiKeySource"></a>

```java
public void resetApiKeySource()
```

##### `resetBinaryMediaTypes` <a name="resetBinaryMediaTypes" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetBinaryMediaTypes"></a>

```java
public void resetBinaryMediaTypes()
```

##### `resetBody` <a name="resetBody" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetBody"></a>

```java
public void resetBody()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisableExecuteApiEndpoint` <a name="resetDisableExecuteApiEndpoint" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetDisableExecuteApiEndpoint"></a>

```java
public void resetDisableExecuteApiEndpoint()
```

##### `resetEndpointConfiguration` <a name="resetEndpointConfiguration" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetEndpointConfiguration"></a>

```java
public void resetEndpointConfiguration()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetId"></a>

```java
public void resetId()
```

##### `resetMinimumCompressionSize` <a name="resetMinimumCompressionSize" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetMinimumCompressionSize"></a>

```java
public void resetMinimumCompressionSize()
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetParameters"></a>

```java
public void resetParameters()
```

##### `resetPolicy` <a name="resetPolicy" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetPolicy"></a>

```java
public void resetPolicy()
```

##### `resetPutRestApiMode` <a name="resetPutRestApiMode" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetPutRestApiMode"></a>

```java
public void resetPutRestApiMode()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_rest_api.ApiGatewayRestApi;

ApiGatewayRestApi.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_rest_api.ApiGatewayRestApi;

ApiGatewayRestApi.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_rest_api.ApiGatewayRestApi;

ApiGatewayRestApi.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.createdDate">createdDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.endpointConfiguration">endpointConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference">ApiGatewayRestApiEndpointConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.executionArn">executionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.rootResourceId">rootResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.apiKeySourceInput">apiKeySourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.binaryMediaTypesInput">binaryMediaTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.bodyInput">bodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.disableExecuteApiEndpointInput">disableExecuteApiEndpointInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.endpointConfigurationInput">endpointConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration">ApiGatewayRestApiEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.minimumCompressionSizeInput">minimumCompressionSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.parametersInput">parametersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.policyInput">policyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.putRestApiModeInput">putRestApiModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.apiKeySource">apiKeySource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.binaryMediaTypes">binaryMediaTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.body">body</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.disableExecuteApiEndpoint">disableExecuteApiEndpoint</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.minimumCompressionSize">minimumCompressionSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.policy">policy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.putRestApiMode">putRestApiMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createdDate`<sup>Required</sup> <a name="createdDate" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.createdDate"></a>

```java
public java.lang.String getCreatedDate();
```

- *Type:* java.lang.String

---

##### `endpointConfiguration`<sup>Required</sup> <a name="endpointConfiguration" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.endpointConfiguration"></a>

```java
public ApiGatewayRestApiEndpointConfigurationOutputReference getEndpointConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference">ApiGatewayRestApiEndpointConfigurationOutputReference</a>

---

##### `executionArn`<sup>Required</sup> <a name="executionArn" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.executionArn"></a>

```java
public java.lang.String getExecutionArn();
```

- *Type:* java.lang.String

---

##### `rootResourceId`<sup>Required</sup> <a name="rootResourceId" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.rootResourceId"></a>

```java
public java.lang.String getRootResourceId();
```

- *Type:* java.lang.String

---

##### `apiKeySourceInput`<sup>Optional</sup> <a name="apiKeySourceInput" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.apiKeySourceInput"></a>

```java
public java.lang.String getApiKeySourceInput();
```

- *Type:* java.lang.String

---

##### `binaryMediaTypesInput`<sup>Optional</sup> <a name="binaryMediaTypesInput" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.binaryMediaTypesInput"></a>

```java
public java.util.List<java.lang.String> getBinaryMediaTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.bodyInput"></a>

```java
public java.lang.String getBodyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `disableExecuteApiEndpointInput`<sup>Optional</sup> <a name="disableExecuteApiEndpointInput" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.disableExecuteApiEndpointInput"></a>

```java
public java.lang.Object getDisableExecuteApiEndpointInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `endpointConfigurationInput`<sup>Optional</sup> <a name="endpointConfigurationInput" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.endpointConfigurationInput"></a>

```java
public ApiGatewayRestApiEndpointConfiguration getEndpointConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration">ApiGatewayRestApiEndpointConfiguration</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `minimumCompressionSizeInput`<sup>Optional</sup> <a name="minimumCompressionSizeInput" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.minimumCompressionSizeInput"></a>

```java
public java.lang.Number getMinimumCompressionSizeInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.parametersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParametersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.policyInput"></a>

```java
public java.lang.String getPolicyInput();
```

- *Type:* java.lang.String

---

##### `putRestApiModeInput`<sup>Optional</sup> <a name="putRestApiModeInput" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.putRestApiModeInput"></a>

```java
public java.lang.String getPutRestApiModeInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `apiKeySource`<sup>Required</sup> <a name="apiKeySource" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.apiKeySource"></a>

```java
public java.lang.String getApiKeySource();
```

- *Type:* java.lang.String

---

##### `binaryMediaTypes`<sup>Required</sup> <a name="binaryMediaTypes" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.binaryMediaTypes"></a>

```java
public java.util.List<java.lang.String> getBinaryMediaTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.body"></a>

```java
public java.lang.String getBody();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disableExecuteApiEndpoint`<sup>Required</sup> <a name="disableExecuteApiEndpoint" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.disableExecuteApiEndpoint"></a>

```java
public java.lang.Object getDisableExecuteApiEndpoint();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `minimumCompressionSize`<sup>Required</sup> <a name="minimumCompressionSize" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.minimumCompressionSize"></a>

```java
public java.lang.Number getMinimumCompressionSize();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.policy"></a>

```java
public java.lang.String getPolicy();
```

- *Type:* java.lang.String

---

##### `putRestApiMode`<sup>Required</sup> <a name="putRestApiMode" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.putRestApiMode"></a>

```java
public java.lang.String getPutRestApiMode();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApi.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApiGatewayRestApiConfig <a name="ApiGatewayRestApiConfig" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_rest_api.ApiGatewayRestApiConfig;

ApiGatewayRestApiConfig.builder()
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
//  .apiKeySource(java.lang.String)
//  .binaryMediaTypes(java.util.List<java.lang.String>)
//  .body(java.lang.String)
//  .description(java.lang.String)
//  .disableExecuteApiEndpoint(java.lang.Boolean)
//  .disableExecuteApiEndpoint(IResolvable)
//  .endpointConfiguration(ApiGatewayRestApiEndpointConfiguration)
//  .id(java.lang.String)
//  .minimumCompressionSize(java.lang.Number)
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
//  .policy(java.lang.String)
//  .putRestApiMode(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#name ApiGatewayRestApi#name}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.apiKeySource">apiKeySource</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#api_key_source ApiGatewayRestApi#api_key_source}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.binaryMediaTypes">binaryMediaTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#binary_media_types ApiGatewayRestApi#binary_media_types}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.body">body</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#body ApiGatewayRestApi#body}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#description ApiGatewayRestApi#description}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.disableExecuteApiEndpoint">disableExecuteApiEndpoint</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#disable_execute_api_endpoint ApiGatewayRestApi#disable_execute_api_endpoint}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.endpointConfiguration">endpointConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration">ApiGatewayRestApiEndpointConfiguration</a></code> | endpoint_configuration block. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#id ApiGatewayRestApi#id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.minimumCompressionSize">minimumCompressionSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#minimum_compression_size ApiGatewayRestApi#minimum_compression_size}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#parameters ApiGatewayRestApi#parameters}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.policy">policy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#policy ApiGatewayRestApi#policy}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.putRestApiMode">putRestApiMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#put_rest_api_mode ApiGatewayRestApi#put_rest_api_mode}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#tags ApiGatewayRestApi#tags}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#tags_all ApiGatewayRestApi#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#name ApiGatewayRestApi#name}.

---

##### `apiKeySource`<sup>Optional</sup> <a name="apiKeySource" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.apiKeySource"></a>

```java
public java.lang.String getApiKeySource();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#api_key_source ApiGatewayRestApi#api_key_source}.

---

##### `binaryMediaTypes`<sup>Optional</sup> <a name="binaryMediaTypes" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.binaryMediaTypes"></a>

```java
public java.util.List<java.lang.String> getBinaryMediaTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#binary_media_types ApiGatewayRestApi#binary_media_types}.

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.body"></a>

```java
public java.lang.String getBody();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#body ApiGatewayRestApi#body}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#description ApiGatewayRestApi#description}.

---

##### `disableExecuteApiEndpoint`<sup>Optional</sup> <a name="disableExecuteApiEndpoint" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.disableExecuteApiEndpoint"></a>

```java
public java.lang.Object getDisableExecuteApiEndpoint();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#disable_execute_api_endpoint ApiGatewayRestApi#disable_execute_api_endpoint}.

---

##### `endpointConfiguration`<sup>Optional</sup> <a name="endpointConfiguration" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.endpointConfiguration"></a>

```java
public ApiGatewayRestApiEndpointConfiguration getEndpointConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration">ApiGatewayRestApiEndpointConfiguration</a>

endpoint_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#endpoint_configuration ApiGatewayRestApi#endpoint_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#id ApiGatewayRestApi#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `minimumCompressionSize`<sup>Optional</sup> <a name="minimumCompressionSize" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.minimumCompressionSize"></a>

```java
public java.lang.Number getMinimumCompressionSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#minimum_compression_size ApiGatewayRestApi#minimum_compression_size}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#parameters ApiGatewayRestApi#parameters}.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.policy"></a>

```java
public java.lang.String getPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#policy ApiGatewayRestApi#policy}.

---

##### `putRestApiMode`<sup>Optional</sup> <a name="putRestApiMode" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.putRestApiMode"></a>

```java
public java.lang.String getPutRestApiMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#put_rest_api_mode ApiGatewayRestApi#put_rest_api_mode}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#tags ApiGatewayRestApi#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#tags_all ApiGatewayRestApi#tags_all}.

---

### ApiGatewayRestApiEndpointConfiguration <a name="ApiGatewayRestApiEndpointConfiguration" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_rest_api.ApiGatewayRestApiEndpointConfiguration;

ApiGatewayRestApiEndpointConfiguration.builder()
    .types(java.util.List<java.lang.String>)
//  .vpcEndpointIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration.property.types">types</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#types ApiGatewayRestApi#types}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration.property.vpcEndpointIds">vpcEndpointIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#vpc_endpoint_ids ApiGatewayRestApi#vpc_endpoint_ids}. |

---

##### `types`<sup>Required</sup> <a name="types" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration.property.types"></a>

```java
public java.util.List<java.lang.String> getTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#types ApiGatewayRestApi#types}.

---

##### `vpcEndpointIds`<sup>Optional</sup> <a name="vpcEndpointIds" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration.property.vpcEndpointIds"></a>

```java
public java.util.List<java.lang.String> getVpcEndpointIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#vpc_endpoint_ids ApiGatewayRestApi#vpc_endpoint_ids}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiGatewayRestApiEndpointConfigurationOutputReference <a name="ApiGatewayRestApiEndpointConfigurationOutputReference" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.api_gateway_rest_api.ApiGatewayRestApiEndpointConfigurationOutputReference;

new ApiGatewayRestApiEndpointConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.resetVpcEndpointIds">resetVpcEndpointIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVpcEndpointIds` <a name="resetVpcEndpointIds" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.resetVpcEndpointIds"></a>

```java
public void resetVpcEndpointIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.typesInput">typesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.vpcEndpointIdsInput">vpcEndpointIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.types">types</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.vpcEndpointIds">vpcEndpointIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration">ApiGatewayRestApiEndpointConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typesInput`<sup>Optional</sup> <a name="typesInput" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.typesInput"></a>

```java
public java.util.List<java.lang.String> getTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcEndpointIdsInput`<sup>Optional</sup> <a name="vpcEndpointIdsInput" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.vpcEndpointIdsInput"></a>

```java
public java.util.List<java.lang.String> getVpcEndpointIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `types`<sup>Required</sup> <a name="types" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.types"></a>

```java
public java.util.List<java.lang.String> getTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcEndpointIds`<sup>Required</sup> <a name="vpcEndpointIds" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.vpcEndpointIds"></a>

```java
public java.util.List<java.lang.String> getVpcEndpointIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfigurationOutputReference.property.internalValue"></a>

```java
public ApiGatewayRestApiEndpointConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayRestApi.ApiGatewayRestApiEndpointConfiguration">ApiGatewayRestApiEndpointConfiguration</a>

---



