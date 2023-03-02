# `apiGatewayIntegration` Submodule <a name="`apiGatewayIntegration` Submodule" id="@cdktf/provider-aws.apiGatewayIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiGatewayIntegration <a name="ApiGatewayIntegration" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration aws_api_gateway_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import api_gateway_integration

apiGatewayIntegration.ApiGatewayIntegration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  http_method: str,
  resource_id: str,
  rest_api_id: str,
  type: str,
  cache_key_parameters: typing.List[str] = None,
  cache_namespace: str = None,
  connection_id: str = None,
  connection_type: str = None,
  content_handling: str = None,
  credentials: str = None,
  id: str = None,
  integration_http_method: str = None,
  passthrough_behavior: str = None,
  request_parameters: typing.Mapping[str] = None,
  request_templates: typing.Mapping[str] = None,
  timeout_milliseconds: typing.Union[int, float] = None,
  tls_config: ApiGatewayIntegrationTlsConfig = None,
  uri: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.httpMethod">http_method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#http_method ApiGatewayIntegration#http_method}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.resourceId">resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#resource_id ApiGatewayIntegration#resource_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.restApiId">rest_api_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#rest_api_id ApiGatewayIntegration#rest_api_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#type ApiGatewayIntegration#type}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.cacheKeyParameters">cache_key_parameters</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#cache_key_parameters ApiGatewayIntegration#cache_key_parameters}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.cacheNamespace">cache_namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#cache_namespace ApiGatewayIntegration#cache_namespace}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.connectionId">connection_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#connection_id ApiGatewayIntegration#connection_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.connectionType">connection_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#connection_type ApiGatewayIntegration#connection_type}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.contentHandling">content_handling</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#content_handling ApiGatewayIntegration#content_handling}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.credentials">credentials</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#credentials ApiGatewayIntegration#credentials}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#id ApiGatewayIntegration#id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.integrationHttpMethod">integration_http_method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#integration_http_method ApiGatewayIntegration#integration_http_method}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.passthroughBehavior">passthrough_behavior</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#passthrough_behavior ApiGatewayIntegration#passthrough_behavior}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.requestParameters">request_parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#request_parameters ApiGatewayIntegration#request_parameters}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.requestTemplates">request_templates</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#request_templates ApiGatewayIntegration#request_templates}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.timeoutMilliseconds">timeout_milliseconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#timeout_milliseconds ApiGatewayIntegration#timeout_milliseconds}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.tlsConfig">tls_config</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfig">ApiGatewayIntegrationTlsConfig</a></code> | tls_config block. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.uri">uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#uri ApiGatewayIntegration#uri}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `http_method`<sup>Required</sup> <a name="http_method" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.httpMethod"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#http_method ApiGatewayIntegration#http_method}.

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.resourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#resource_id ApiGatewayIntegration#resource_id}.

---

##### `rest_api_id`<sup>Required</sup> <a name="rest_api_id" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.restApiId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#rest_api_id ApiGatewayIntegration#rest_api_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#type ApiGatewayIntegration#type}.

---

##### `cache_key_parameters`<sup>Optional</sup> <a name="cache_key_parameters" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.cacheKeyParameters"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#cache_key_parameters ApiGatewayIntegration#cache_key_parameters}.

---

##### `cache_namespace`<sup>Optional</sup> <a name="cache_namespace" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.cacheNamespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#cache_namespace ApiGatewayIntegration#cache_namespace}.

---

##### `connection_id`<sup>Optional</sup> <a name="connection_id" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.connectionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#connection_id ApiGatewayIntegration#connection_id}.

---

##### `connection_type`<sup>Optional</sup> <a name="connection_type" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.connectionType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#connection_type ApiGatewayIntegration#connection_type}.

---

##### `content_handling`<sup>Optional</sup> <a name="content_handling" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.contentHandling"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#content_handling ApiGatewayIntegration#content_handling}.

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.credentials"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#credentials ApiGatewayIntegration#credentials}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#id ApiGatewayIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integration_http_method`<sup>Optional</sup> <a name="integration_http_method" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.integrationHttpMethod"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#integration_http_method ApiGatewayIntegration#integration_http_method}.

---

##### `passthrough_behavior`<sup>Optional</sup> <a name="passthrough_behavior" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.passthroughBehavior"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#passthrough_behavior ApiGatewayIntegration#passthrough_behavior}.

---

##### `request_parameters`<sup>Optional</sup> <a name="request_parameters" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.requestParameters"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#request_parameters ApiGatewayIntegration#request_parameters}.

---

##### `request_templates`<sup>Optional</sup> <a name="request_templates" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.requestTemplates"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#request_templates ApiGatewayIntegration#request_templates}.

---

##### `timeout_milliseconds`<sup>Optional</sup> <a name="timeout_milliseconds" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.timeoutMilliseconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#timeout_milliseconds ApiGatewayIntegration#timeout_milliseconds}.

---

##### `tls_config`<sup>Optional</sup> <a name="tls_config" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.tlsConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfig">ApiGatewayIntegrationTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#tls_config ApiGatewayIntegration#tls_config}

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.Initializer.parameter.uri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#uri ApiGatewayIntegration#uri}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.putTlsConfig">put_tls_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetCacheKeyParameters">reset_cache_key_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetCacheNamespace">reset_cache_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetConnectionId">reset_connection_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetConnectionType">reset_connection_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetContentHandling">reset_content_handling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetCredentials">reset_credentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetIntegrationHttpMethod">reset_integration_http_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetPassthroughBehavior">reset_passthrough_behavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetRequestParameters">reset_request_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetRequestTemplates">reset_request_templates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetTimeoutMilliseconds">reset_timeout_milliseconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetTlsConfig">reset_tls_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetUri">reset_uri</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_tls_config` <a name="put_tls_config" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.putTlsConfig"></a>

```python
def put_tls_config(
  insecure_skip_verification: typing.Union[bool, IResolvable] = None
) -> None
```

###### `insecure_skip_verification`<sup>Optional</sup> <a name="insecure_skip_verification" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.putTlsConfig.parameter.insecureSkipVerification"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#insecure_skip_verification ApiGatewayIntegration#insecure_skip_verification}.

---

##### `reset_cache_key_parameters` <a name="reset_cache_key_parameters" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetCacheKeyParameters"></a>

```python
def reset_cache_key_parameters() -> None
```

##### `reset_cache_namespace` <a name="reset_cache_namespace" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetCacheNamespace"></a>

```python
def reset_cache_namespace() -> None
```

##### `reset_connection_id` <a name="reset_connection_id" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetConnectionId"></a>

```python
def reset_connection_id() -> None
```

##### `reset_connection_type` <a name="reset_connection_type" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetConnectionType"></a>

```python
def reset_connection_type() -> None
```

##### `reset_content_handling` <a name="reset_content_handling" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetContentHandling"></a>

```python
def reset_content_handling() -> None
```

##### `reset_credentials` <a name="reset_credentials" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetCredentials"></a>

```python
def reset_credentials() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_integration_http_method` <a name="reset_integration_http_method" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetIntegrationHttpMethod"></a>

```python
def reset_integration_http_method() -> None
```

##### `reset_passthrough_behavior` <a name="reset_passthrough_behavior" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetPassthroughBehavior"></a>

```python
def reset_passthrough_behavior() -> None
```

##### `reset_request_parameters` <a name="reset_request_parameters" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetRequestParameters"></a>

```python
def reset_request_parameters() -> None
```

##### `reset_request_templates` <a name="reset_request_templates" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetRequestTemplates"></a>

```python
def reset_request_templates() -> None
```

##### `reset_timeout_milliseconds` <a name="reset_timeout_milliseconds" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetTimeoutMilliseconds"></a>

```python
def reset_timeout_milliseconds() -> None
```

##### `reset_tls_config` <a name="reset_tls_config" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetTlsConfig"></a>

```python
def reset_tls_config() -> None
```

##### `reset_uri` <a name="reset_uri" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.resetUri"></a>

```python
def reset_uri() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import api_gateway_integration

apiGatewayIntegration.ApiGatewayIntegration.is_construct(
  x: typing.Any
)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import api_gateway_integration

apiGatewayIntegration.ApiGatewayIntegration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import api_gateway_integration

apiGatewayIntegration.ApiGatewayIntegration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.tlsConfig">tls_config</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference">ApiGatewayIntegrationTlsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.cacheKeyParametersInput">cache_key_parameters_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.cacheNamespaceInput">cache_namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.connectionIdInput">connection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.connectionTypeInput">connection_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.contentHandlingInput">content_handling_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.credentialsInput">credentials_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.httpMethodInput">http_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.integrationHttpMethodInput">integration_http_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.passthroughBehaviorInput">passthrough_behavior_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.requestParametersInput">request_parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.requestTemplatesInput">request_templates_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.resourceIdInput">resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.restApiIdInput">rest_api_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.timeoutMillisecondsInput">timeout_milliseconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.tlsConfigInput">tls_config_input</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfig">ApiGatewayIntegrationTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.cacheKeyParameters">cache_key_parameters</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.cacheNamespace">cache_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.connectionId">connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.connectionType">connection_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.contentHandling">content_handling</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.credentials">credentials</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.httpMethod">http_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.integrationHttpMethod">integration_http_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.passthroughBehavior">passthrough_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.requestParameters">request_parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.requestTemplates">request_templates</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.restApiId">rest_api_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.timeoutMilliseconds">timeout_milliseconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.uri">uri</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `tls_config`<sup>Required</sup> <a name="tls_config" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.tlsConfig"></a>

```python
tls_config: ApiGatewayIntegrationTlsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference">ApiGatewayIntegrationTlsConfigOutputReference</a>

---

##### `cache_key_parameters_input`<sup>Optional</sup> <a name="cache_key_parameters_input" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.cacheKeyParametersInput"></a>

```python
cache_key_parameters_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cache_namespace_input`<sup>Optional</sup> <a name="cache_namespace_input" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.cacheNamespaceInput"></a>

```python
cache_namespace_input: str
```

- *Type:* str

---

##### `connection_id_input`<sup>Optional</sup> <a name="connection_id_input" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.connectionIdInput"></a>

```python
connection_id_input: str
```

- *Type:* str

---

##### `connection_type_input`<sup>Optional</sup> <a name="connection_type_input" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.connectionTypeInput"></a>

```python
connection_type_input: str
```

- *Type:* str

---

##### `content_handling_input`<sup>Optional</sup> <a name="content_handling_input" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.contentHandlingInput"></a>

```python
content_handling_input: str
```

- *Type:* str

---

##### `credentials_input`<sup>Optional</sup> <a name="credentials_input" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.credentialsInput"></a>

```python
credentials_input: str
```

- *Type:* str

---

##### `http_method_input`<sup>Optional</sup> <a name="http_method_input" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.httpMethodInput"></a>

```python
http_method_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `integration_http_method_input`<sup>Optional</sup> <a name="integration_http_method_input" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.integrationHttpMethodInput"></a>

```python
integration_http_method_input: str
```

- *Type:* str

---

##### `passthrough_behavior_input`<sup>Optional</sup> <a name="passthrough_behavior_input" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.passthroughBehaviorInput"></a>

```python
passthrough_behavior_input: str
```

- *Type:* str

---

##### `request_parameters_input`<sup>Optional</sup> <a name="request_parameters_input" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.requestParametersInput"></a>

```python
request_parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `request_templates_input`<sup>Optional</sup> <a name="request_templates_input" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.requestTemplatesInput"></a>

```python
request_templates_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `resource_id_input`<sup>Optional</sup> <a name="resource_id_input" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.resourceIdInput"></a>

```python
resource_id_input: str
```

- *Type:* str

---

##### `rest_api_id_input`<sup>Optional</sup> <a name="rest_api_id_input" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.restApiIdInput"></a>

```python
rest_api_id_input: str
```

- *Type:* str

---

##### `timeout_milliseconds_input`<sup>Optional</sup> <a name="timeout_milliseconds_input" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.timeoutMillisecondsInput"></a>

```python
timeout_milliseconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tls_config_input`<sup>Optional</sup> <a name="tls_config_input" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.tlsConfigInput"></a>

```python
tls_config_input: ApiGatewayIntegrationTlsConfig
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfig">ApiGatewayIntegrationTlsConfig</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `cache_key_parameters`<sup>Required</sup> <a name="cache_key_parameters" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.cacheKeyParameters"></a>

```python
cache_key_parameters: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cache_namespace`<sup>Required</sup> <a name="cache_namespace" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.cacheNamespace"></a>

```python
cache_namespace: str
```

- *Type:* str

---

##### `connection_id`<sup>Required</sup> <a name="connection_id" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

---

##### `connection_type`<sup>Required</sup> <a name="connection_type" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.connectionType"></a>

```python
connection_type: str
```

- *Type:* str

---

##### `content_handling`<sup>Required</sup> <a name="content_handling" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.contentHandling"></a>

```python
content_handling: str
```

- *Type:* str

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.credentials"></a>

```python
credentials: str
```

- *Type:* str

---

##### `http_method`<sup>Required</sup> <a name="http_method" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.httpMethod"></a>

```python
http_method: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `integration_http_method`<sup>Required</sup> <a name="integration_http_method" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.integrationHttpMethod"></a>

```python
integration_http_method: str
```

- *Type:* str

---

##### `passthrough_behavior`<sup>Required</sup> <a name="passthrough_behavior" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.passthroughBehavior"></a>

```python
passthrough_behavior: str
```

- *Type:* str

---

##### `request_parameters`<sup>Required</sup> <a name="request_parameters" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.requestParameters"></a>

```python
request_parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `request_templates`<sup>Required</sup> <a name="request_templates" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.requestTemplates"></a>

```python
request_templates: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `rest_api_id`<sup>Required</sup> <a name="rest_api_id" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.restApiId"></a>

```python
rest_api_id: str
```

- *Type:* str

---

##### `timeout_milliseconds`<sup>Required</sup> <a name="timeout_milliseconds" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.timeoutMilliseconds"></a>

```python
timeout_milliseconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApiGatewayIntegrationConfig <a name="ApiGatewayIntegrationConfig" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import api_gateway_integration

apiGatewayIntegration.ApiGatewayIntegrationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  http_method: str,
  resource_id: str,
  rest_api_id: str,
  type: str,
  cache_key_parameters: typing.List[str] = None,
  cache_namespace: str = None,
  connection_id: str = None,
  connection_type: str = None,
  content_handling: str = None,
  credentials: str = None,
  id: str = None,
  integration_http_method: str = None,
  passthrough_behavior: str = None,
  request_parameters: typing.Mapping[str] = None,
  request_templates: typing.Mapping[str] = None,
  timeout_milliseconds: typing.Union[int, float] = None,
  tls_config: ApiGatewayIntegrationTlsConfig = None,
  uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.httpMethod">http_method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#http_method ApiGatewayIntegration#http_method}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.resourceId">resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#resource_id ApiGatewayIntegration#resource_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.restApiId">rest_api_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#rest_api_id ApiGatewayIntegration#rest_api_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#type ApiGatewayIntegration#type}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.cacheKeyParameters">cache_key_parameters</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#cache_key_parameters ApiGatewayIntegration#cache_key_parameters}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.cacheNamespace">cache_namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#cache_namespace ApiGatewayIntegration#cache_namespace}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.connectionId">connection_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#connection_id ApiGatewayIntegration#connection_id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.connectionType">connection_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#connection_type ApiGatewayIntegration#connection_type}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.contentHandling">content_handling</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#content_handling ApiGatewayIntegration#content_handling}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.credentials">credentials</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#credentials ApiGatewayIntegration#credentials}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#id ApiGatewayIntegration#id}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.integrationHttpMethod">integration_http_method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#integration_http_method ApiGatewayIntegration#integration_http_method}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.passthroughBehavior">passthrough_behavior</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#passthrough_behavior ApiGatewayIntegration#passthrough_behavior}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.requestParameters">request_parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#request_parameters ApiGatewayIntegration#request_parameters}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.requestTemplates">request_templates</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#request_templates ApiGatewayIntegration#request_templates}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.timeoutMilliseconds">timeout_milliseconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#timeout_milliseconds ApiGatewayIntegration#timeout_milliseconds}. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.tlsConfig">tls_config</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfig">ApiGatewayIntegrationTlsConfig</a></code> | tls_config block. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.uri">uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#uri ApiGatewayIntegration#uri}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `http_method`<sup>Required</sup> <a name="http_method" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.httpMethod"></a>

```python
http_method: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#http_method ApiGatewayIntegration#http_method}.

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#resource_id ApiGatewayIntegration#resource_id}.

---

##### `rest_api_id`<sup>Required</sup> <a name="rest_api_id" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.restApiId"></a>

```python
rest_api_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#rest_api_id ApiGatewayIntegration#rest_api_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#type ApiGatewayIntegration#type}.

---

##### `cache_key_parameters`<sup>Optional</sup> <a name="cache_key_parameters" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.cacheKeyParameters"></a>

```python
cache_key_parameters: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#cache_key_parameters ApiGatewayIntegration#cache_key_parameters}.

---

##### `cache_namespace`<sup>Optional</sup> <a name="cache_namespace" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.cacheNamespace"></a>

```python
cache_namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#cache_namespace ApiGatewayIntegration#cache_namespace}.

---

##### `connection_id`<sup>Optional</sup> <a name="connection_id" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#connection_id ApiGatewayIntegration#connection_id}.

---

##### `connection_type`<sup>Optional</sup> <a name="connection_type" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.connectionType"></a>

```python
connection_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#connection_type ApiGatewayIntegration#connection_type}.

---

##### `content_handling`<sup>Optional</sup> <a name="content_handling" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.contentHandling"></a>

```python
content_handling: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#content_handling ApiGatewayIntegration#content_handling}.

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.credentials"></a>

```python
credentials: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#credentials ApiGatewayIntegration#credentials}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#id ApiGatewayIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integration_http_method`<sup>Optional</sup> <a name="integration_http_method" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.integrationHttpMethod"></a>

```python
integration_http_method: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#integration_http_method ApiGatewayIntegration#integration_http_method}.

---

##### `passthrough_behavior`<sup>Optional</sup> <a name="passthrough_behavior" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.passthroughBehavior"></a>

```python
passthrough_behavior: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#passthrough_behavior ApiGatewayIntegration#passthrough_behavior}.

---

##### `request_parameters`<sup>Optional</sup> <a name="request_parameters" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.requestParameters"></a>

```python
request_parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#request_parameters ApiGatewayIntegration#request_parameters}.

---

##### `request_templates`<sup>Optional</sup> <a name="request_templates" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.requestTemplates"></a>

```python
request_templates: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#request_templates ApiGatewayIntegration#request_templates}.

---

##### `timeout_milliseconds`<sup>Optional</sup> <a name="timeout_milliseconds" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.timeoutMilliseconds"></a>

```python
timeout_milliseconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#timeout_milliseconds ApiGatewayIntegration#timeout_milliseconds}.

---

##### `tls_config`<sup>Optional</sup> <a name="tls_config" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.tlsConfig"></a>

```python
tls_config: ApiGatewayIntegrationTlsConfig
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfig">ApiGatewayIntegrationTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#tls_config ApiGatewayIntegration#tls_config}

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationConfig.property.uri"></a>

```python
uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#uri ApiGatewayIntegration#uri}.

---

### ApiGatewayIntegrationTlsConfig <a name="ApiGatewayIntegrationTlsConfig" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import api_gateway_integration

apiGatewayIntegration.ApiGatewayIntegrationTlsConfig(
  insecure_skip_verification: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfig.property.insecureSkipVerification">insecure_skip_verification</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#insecure_skip_verification ApiGatewayIntegration#insecure_skip_verification}. |

---

##### `insecure_skip_verification`<sup>Optional</sup> <a name="insecure_skip_verification" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfig.property.insecureSkipVerification"></a>

```python
insecure_skip_verification: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration#insecure_skip_verification ApiGatewayIntegration#insecure_skip_verification}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiGatewayIntegrationTlsConfigOutputReference <a name="ApiGatewayIntegrationTlsConfigOutputReference" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import api_gateway_integration

apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.resetInsecureSkipVerification">reset_insecure_skip_verification</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_insecure_skip_verification` <a name="reset_insecure_skip_verification" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.resetInsecureSkipVerification"></a>

```python
def reset_insecure_skip_verification() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.property.insecureSkipVerificationInput">insecure_skip_verification_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.property.insecureSkipVerification">insecure_skip_verification</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfig">ApiGatewayIntegrationTlsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `insecure_skip_verification_input`<sup>Optional</sup> <a name="insecure_skip_verification_input" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.property.insecureSkipVerificationInput"></a>

```python
insecure_skip_verification_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `insecure_skip_verification`<sup>Required</sup> <a name="insecure_skip_verification" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.property.insecureSkipVerification"></a>

```python
insecure_skip_verification: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfigOutputReference.property.internalValue"></a>

```python
internal_value: ApiGatewayIntegrationTlsConfig
```

- *Type:* <a href="#@cdktf/provider-aws.apiGatewayIntegration.ApiGatewayIntegrationTlsConfig">ApiGatewayIntegrationTlsConfig</a>

---



