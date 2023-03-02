# `apigatewayv2Integration` Submodule <a name="`apigatewayv2Integration` Submodule" id="@cdktf/provider-aws.apigatewayv2Integration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Apigatewayv2Integration <a name="Apigatewayv2Integration" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration aws_apigatewayv2_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import apigatewayv2_integration

apigatewayv2Integration.Apigatewayv2Integration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  api_id: str,
  integration_type: str,
  connection_id: str = None,
  connection_type: str = None,
  content_handling_strategy: str = None,
  credentials_arn: str = None,
  description: str = None,
  id: str = None,
  integration_method: str = None,
  integration_subtype: str = None,
  integration_uri: str = None,
  passthrough_behavior: str = None,
  payload_format_version: str = None,
  request_parameters: typing.Mapping[str] = None,
  request_templates: typing.Mapping[str] = None,
  response_parameters: typing.Union[IResolvable, typing.List[Apigatewayv2IntegrationResponseParameters]] = None,
  template_selection_expression: str = None,
  timeout_milliseconds: typing.Union[int, float] = None,
  tls_config: Apigatewayv2IntegrationTlsConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.apiId">api_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#api_id Apigatewayv2Integration#api_id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.integrationType">integration_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#integration_type Apigatewayv2Integration#integration_type}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.connectionId">connection_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#connection_id Apigatewayv2Integration#connection_id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.connectionType">connection_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#connection_type Apigatewayv2Integration#connection_type}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.contentHandlingStrategy">content_handling_strategy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#content_handling_strategy Apigatewayv2Integration#content_handling_strategy}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.credentialsArn">credentials_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#credentials_arn Apigatewayv2Integration#credentials_arn}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#description Apigatewayv2Integration#description}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#id Apigatewayv2Integration#id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.integrationMethod">integration_method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#integration_method Apigatewayv2Integration#integration_method}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.integrationSubtype">integration_subtype</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#integration_subtype Apigatewayv2Integration#integration_subtype}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.integrationUri">integration_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#integration_uri Apigatewayv2Integration#integration_uri}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.passthroughBehavior">passthrough_behavior</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#passthrough_behavior Apigatewayv2Integration#passthrough_behavior}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.payloadFormatVersion">payload_format_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#payload_format_version Apigatewayv2Integration#payload_format_version}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.requestParameters">request_parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#request_parameters Apigatewayv2Integration#request_parameters}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.requestTemplates">request_templates</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#request_templates Apigatewayv2Integration#request_templates}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.responseParameters">response_parameters</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters">Apigatewayv2IntegrationResponseParameters</a>]]</code> | response_parameters block. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.templateSelectionExpression">template_selection_expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#template_selection_expression Apigatewayv2Integration#template_selection_expression}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.timeoutMilliseconds">timeout_milliseconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#timeout_milliseconds Apigatewayv2Integration#timeout_milliseconds}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.tlsConfig">tls_config</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig">Apigatewayv2IntegrationTlsConfig</a></code> | tls_config block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_id`<sup>Required</sup> <a name="api_id" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.apiId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#api_id Apigatewayv2Integration#api_id}.

---

##### `integration_type`<sup>Required</sup> <a name="integration_type" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.integrationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#integration_type Apigatewayv2Integration#integration_type}.

---

##### `connection_id`<sup>Optional</sup> <a name="connection_id" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.connectionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#connection_id Apigatewayv2Integration#connection_id}.

---

##### `connection_type`<sup>Optional</sup> <a name="connection_type" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.connectionType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#connection_type Apigatewayv2Integration#connection_type}.

---

##### `content_handling_strategy`<sup>Optional</sup> <a name="content_handling_strategy" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.contentHandlingStrategy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#content_handling_strategy Apigatewayv2Integration#content_handling_strategy}.

---

##### `credentials_arn`<sup>Optional</sup> <a name="credentials_arn" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.credentialsArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#credentials_arn Apigatewayv2Integration#credentials_arn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#description Apigatewayv2Integration#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#id Apigatewayv2Integration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integration_method`<sup>Optional</sup> <a name="integration_method" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.integrationMethod"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#integration_method Apigatewayv2Integration#integration_method}.

---

##### `integration_subtype`<sup>Optional</sup> <a name="integration_subtype" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.integrationSubtype"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#integration_subtype Apigatewayv2Integration#integration_subtype}.

---

##### `integration_uri`<sup>Optional</sup> <a name="integration_uri" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.integrationUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#integration_uri Apigatewayv2Integration#integration_uri}.

---

##### `passthrough_behavior`<sup>Optional</sup> <a name="passthrough_behavior" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.passthroughBehavior"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#passthrough_behavior Apigatewayv2Integration#passthrough_behavior}.

---

##### `payload_format_version`<sup>Optional</sup> <a name="payload_format_version" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.payloadFormatVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#payload_format_version Apigatewayv2Integration#payload_format_version}.

---

##### `request_parameters`<sup>Optional</sup> <a name="request_parameters" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.requestParameters"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#request_parameters Apigatewayv2Integration#request_parameters}.

---

##### `request_templates`<sup>Optional</sup> <a name="request_templates" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.requestTemplates"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#request_templates Apigatewayv2Integration#request_templates}.

---

##### `response_parameters`<sup>Optional</sup> <a name="response_parameters" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.responseParameters"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters">Apigatewayv2IntegrationResponseParameters</a>]]

response_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#response_parameters Apigatewayv2Integration#response_parameters}

---

##### `template_selection_expression`<sup>Optional</sup> <a name="template_selection_expression" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.templateSelectionExpression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#template_selection_expression Apigatewayv2Integration#template_selection_expression}.

---

##### `timeout_milliseconds`<sup>Optional</sup> <a name="timeout_milliseconds" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.timeoutMilliseconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#timeout_milliseconds Apigatewayv2Integration#timeout_milliseconds}.

---

##### `tls_config`<sup>Optional</sup> <a name="tls_config" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.Initializer.parameter.tlsConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig">Apigatewayv2IntegrationTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#tls_config Apigatewayv2Integration#tls_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.putResponseParameters">put_response_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.putTlsConfig">put_tls_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetConnectionId">reset_connection_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetConnectionType">reset_connection_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetContentHandlingStrategy">reset_content_handling_strategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetCredentialsArn">reset_credentials_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetIntegrationMethod">reset_integration_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetIntegrationSubtype">reset_integration_subtype</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetIntegrationUri">reset_integration_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetPassthroughBehavior">reset_passthrough_behavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetPayloadFormatVersion">reset_payload_format_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetRequestParameters">reset_request_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetRequestTemplates">reset_request_templates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetResponseParameters">reset_response_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetTemplateSelectionExpression">reset_template_selection_expression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetTimeoutMilliseconds">reset_timeout_milliseconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetTlsConfig">reset_tls_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_response_parameters` <a name="put_response_parameters" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.putResponseParameters"></a>

```python
def put_response_parameters(
  value: typing.Union[IResolvable, typing.List[Apigatewayv2IntegrationResponseParameters]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.putResponseParameters.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters">Apigatewayv2IntegrationResponseParameters</a>]]

---

##### `put_tls_config` <a name="put_tls_config" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.putTlsConfig"></a>

```python
def put_tls_config(
  server_name_to_verify: str = None
) -> None
```

###### `server_name_to_verify`<sup>Optional</sup> <a name="server_name_to_verify" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.putTlsConfig.parameter.serverNameToVerify"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#server_name_to_verify Apigatewayv2Integration#server_name_to_verify}.

---

##### `reset_connection_id` <a name="reset_connection_id" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetConnectionId"></a>

```python
def reset_connection_id() -> None
```

##### `reset_connection_type` <a name="reset_connection_type" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetConnectionType"></a>

```python
def reset_connection_type() -> None
```

##### `reset_content_handling_strategy` <a name="reset_content_handling_strategy" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetContentHandlingStrategy"></a>

```python
def reset_content_handling_strategy() -> None
```

##### `reset_credentials_arn` <a name="reset_credentials_arn" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetCredentialsArn"></a>

```python
def reset_credentials_arn() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_integration_method` <a name="reset_integration_method" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetIntegrationMethod"></a>

```python
def reset_integration_method() -> None
```

##### `reset_integration_subtype` <a name="reset_integration_subtype" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetIntegrationSubtype"></a>

```python
def reset_integration_subtype() -> None
```

##### `reset_integration_uri` <a name="reset_integration_uri" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetIntegrationUri"></a>

```python
def reset_integration_uri() -> None
```

##### `reset_passthrough_behavior` <a name="reset_passthrough_behavior" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetPassthroughBehavior"></a>

```python
def reset_passthrough_behavior() -> None
```

##### `reset_payload_format_version` <a name="reset_payload_format_version" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetPayloadFormatVersion"></a>

```python
def reset_payload_format_version() -> None
```

##### `reset_request_parameters` <a name="reset_request_parameters" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetRequestParameters"></a>

```python
def reset_request_parameters() -> None
```

##### `reset_request_templates` <a name="reset_request_templates" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetRequestTemplates"></a>

```python
def reset_request_templates() -> None
```

##### `reset_response_parameters` <a name="reset_response_parameters" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetResponseParameters"></a>

```python
def reset_response_parameters() -> None
```

##### `reset_template_selection_expression` <a name="reset_template_selection_expression" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetTemplateSelectionExpression"></a>

```python
def reset_template_selection_expression() -> None
```

##### `reset_timeout_milliseconds` <a name="reset_timeout_milliseconds" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetTimeoutMilliseconds"></a>

```python
def reset_timeout_milliseconds() -> None
```

##### `reset_tls_config` <a name="reset_tls_config" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.resetTlsConfig"></a>

```python
def reset_tls_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import apigatewayv2_integration

apigatewayv2Integration.Apigatewayv2Integration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import apigatewayv2_integration

apigatewayv2Integration.Apigatewayv2Integration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import apigatewayv2_integration

apigatewayv2Integration.Apigatewayv2Integration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationResponseSelectionExpression">integration_response_selection_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.responseParameters">response_parameters</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList">Apigatewayv2IntegrationResponseParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.tlsConfig">tls_config</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference">Apigatewayv2IntegrationTlsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.apiIdInput">api_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.connectionIdInput">connection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.connectionTypeInput">connection_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.contentHandlingStrategyInput">content_handling_strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.credentialsArnInput">credentials_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationMethodInput">integration_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationSubtypeInput">integration_subtype_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationTypeInput">integration_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationUriInput">integration_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.passthroughBehaviorInput">passthrough_behavior_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.payloadFormatVersionInput">payload_format_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.requestParametersInput">request_parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.requestTemplatesInput">request_templates_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.responseParametersInput">response_parameters_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters">Apigatewayv2IntegrationResponseParameters</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.templateSelectionExpressionInput">template_selection_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.timeoutMillisecondsInput">timeout_milliseconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.tlsConfigInput">tls_config_input</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig">Apigatewayv2IntegrationTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.apiId">api_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.connectionId">connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.connectionType">connection_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.contentHandlingStrategy">content_handling_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.credentialsArn">credentials_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationMethod">integration_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationSubtype">integration_subtype</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationType">integration_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationUri">integration_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.passthroughBehavior">passthrough_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.payloadFormatVersion">payload_format_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.requestParameters">request_parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.requestTemplates">request_templates</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.templateSelectionExpression">template_selection_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.timeoutMilliseconds">timeout_milliseconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `integration_response_selection_expression`<sup>Required</sup> <a name="integration_response_selection_expression" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationResponseSelectionExpression"></a>

```python
integration_response_selection_expression: str
```

- *Type:* str

---

##### `response_parameters`<sup>Required</sup> <a name="response_parameters" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.responseParameters"></a>

```python
response_parameters: Apigatewayv2IntegrationResponseParametersList
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList">Apigatewayv2IntegrationResponseParametersList</a>

---

##### `tls_config`<sup>Required</sup> <a name="tls_config" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.tlsConfig"></a>

```python
tls_config: Apigatewayv2IntegrationTlsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference">Apigatewayv2IntegrationTlsConfigOutputReference</a>

---

##### `api_id_input`<sup>Optional</sup> <a name="api_id_input" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.apiIdInput"></a>

```python
api_id_input: str
```

- *Type:* str

---

##### `connection_id_input`<sup>Optional</sup> <a name="connection_id_input" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.connectionIdInput"></a>

```python
connection_id_input: str
```

- *Type:* str

---

##### `connection_type_input`<sup>Optional</sup> <a name="connection_type_input" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.connectionTypeInput"></a>

```python
connection_type_input: str
```

- *Type:* str

---

##### `content_handling_strategy_input`<sup>Optional</sup> <a name="content_handling_strategy_input" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.contentHandlingStrategyInput"></a>

```python
content_handling_strategy_input: str
```

- *Type:* str

---

##### `credentials_arn_input`<sup>Optional</sup> <a name="credentials_arn_input" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.credentialsArnInput"></a>

```python
credentials_arn_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `integration_method_input`<sup>Optional</sup> <a name="integration_method_input" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationMethodInput"></a>

```python
integration_method_input: str
```

- *Type:* str

---

##### `integration_subtype_input`<sup>Optional</sup> <a name="integration_subtype_input" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationSubtypeInput"></a>

```python
integration_subtype_input: str
```

- *Type:* str

---

##### `integration_type_input`<sup>Optional</sup> <a name="integration_type_input" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationTypeInput"></a>

```python
integration_type_input: str
```

- *Type:* str

---

##### `integration_uri_input`<sup>Optional</sup> <a name="integration_uri_input" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationUriInput"></a>

```python
integration_uri_input: str
```

- *Type:* str

---

##### `passthrough_behavior_input`<sup>Optional</sup> <a name="passthrough_behavior_input" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.passthroughBehaviorInput"></a>

```python
passthrough_behavior_input: str
```

- *Type:* str

---

##### `payload_format_version_input`<sup>Optional</sup> <a name="payload_format_version_input" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.payloadFormatVersionInput"></a>

```python
payload_format_version_input: str
```

- *Type:* str

---

##### `request_parameters_input`<sup>Optional</sup> <a name="request_parameters_input" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.requestParametersInput"></a>

```python
request_parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `request_templates_input`<sup>Optional</sup> <a name="request_templates_input" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.requestTemplatesInput"></a>

```python
request_templates_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `response_parameters_input`<sup>Optional</sup> <a name="response_parameters_input" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.responseParametersInput"></a>

```python
response_parameters_input: typing.Union[IResolvable, typing.List[Apigatewayv2IntegrationResponseParameters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters">Apigatewayv2IntegrationResponseParameters</a>]]

---

##### `template_selection_expression_input`<sup>Optional</sup> <a name="template_selection_expression_input" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.templateSelectionExpressionInput"></a>

```python
template_selection_expression_input: str
```

- *Type:* str

---

##### `timeout_milliseconds_input`<sup>Optional</sup> <a name="timeout_milliseconds_input" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.timeoutMillisecondsInput"></a>

```python
timeout_milliseconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tls_config_input`<sup>Optional</sup> <a name="tls_config_input" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.tlsConfigInput"></a>

```python
tls_config_input: Apigatewayv2IntegrationTlsConfig
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig">Apigatewayv2IntegrationTlsConfig</a>

---

##### `api_id`<sup>Required</sup> <a name="api_id" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.apiId"></a>

```python
api_id: str
```

- *Type:* str

---

##### `connection_id`<sup>Required</sup> <a name="connection_id" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

---

##### `connection_type`<sup>Required</sup> <a name="connection_type" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.connectionType"></a>

```python
connection_type: str
```

- *Type:* str

---

##### `content_handling_strategy`<sup>Required</sup> <a name="content_handling_strategy" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.contentHandlingStrategy"></a>

```python
content_handling_strategy: str
```

- *Type:* str

---

##### `credentials_arn`<sup>Required</sup> <a name="credentials_arn" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.credentialsArn"></a>

```python
credentials_arn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `integration_method`<sup>Required</sup> <a name="integration_method" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationMethod"></a>

```python
integration_method: str
```

- *Type:* str

---

##### `integration_subtype`<sup>Required</sup> <a name="integration_subtype" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationSubtype"></a>

```python
integration_subtype: str
```

- *Type:* str

---

##### `integration_type`<sup>Required</sup> <a name="integration_type" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationType"></a>

```python
integration_type: str
```

- *Type:* str

---

##### `integration_uri`<sup>Required</sup> <a name="integration_uri" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.integrationUri"></a>

```python
integration_uri: str
```

- *Type:* str

---

##### `passthrough_behavior`<sup>Required</sup> <a name="passthrough_behavior" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.passthroughBehavior"></a>

```python
passthrough_behavior: str
```

- *Type:* str

---

##### `payload_format_version`<sup>Required</sup> <a name="payload_format_version" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.payloadFormatVersion"></a>

```python
payload_format_version: str
```

- *Type:* str

---

##### `request_parameters`<sup>Required</sup> <a name="request_parameters" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.requestParameters"></a>

```python
request_parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `request_templates`<sup>Required</sup> <a name="request_templates" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.requestTemplates"></a>

```python
request_templates: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `template_selection_expression`<sup>Required</sup> <a name="template_selection_expression" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.templateSelectionExpression"></a>

```python
template_selection_expression: str
```

- *Type:* str

---

##### `timeout_milliseconds`<sup>Required</sup> <a name="timeout_milliseconds" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.timeoutMilliseconds"></a>

```python
timeout_milliseconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2Integration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Apigatewayv2IntegrationConfig <a name="Apigatewayv2IntegrationConfig" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import apigatewayv2_integration

apigatewayv2Integration.Apigatewayv2IntegrationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  api_id: str,
  integration_type: str,
  connection_id: str = None,
  connection_type: str = None,
  content_handling_strategy: str = None,
  credentials_arn: str = None,
  description: str = None,
  id: str = None,
  integration_method: str = None,
  integration_subtype: str = None,
  integration_uri: str = None,
  passthrough_behavior: str = None,
  payload_format_version: str = None,
  request_parameters: typing.Mapping[str] = None,
  request_templates: typing.Mapping[str] = None,
  response_parameters: typing.Union[IResolvable, typing.List[Apigatewayv2IntegrationResponseParameters]] = None,
  template_selection_expression: str = None,
  timeout_milliseconds: typing.Union[int, float] = None,
  tls_config: Apigatewayv2IntegrationTlsConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.apiId">api_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#api_id Apigatewayv2Integration#api_id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.integrationType">integration_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#integration_type Apigatewayv2Integration#integration_type}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.connectionId">connection_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#connection_id Apigatewayv2Integration#connection_id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.connectionType">connection_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#connection_type Apigatewayv2Integration#connection_type}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.contentHandlingStrategy">content_handling_strategy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#content_handling_strategy Apigatewayv2Integration#content_handling_strategy}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.credentialsArn">credentials_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#credentials_arn Apigatewayv2Integration#credentials_arn}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#description Apigatewayv2Integration#description}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#id Apigatewayv2Integration#id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.integrationMethod">integration_method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#integration_method Apigatewayv2Integration#integration_method}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.integrationSubtype">integration_subtype</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#integration_subtype Apigatewayv2Integration#integration_subtype}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.integrationUri">integration_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#integration_uri Apigatewayv2Integration#integration_uri}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.passthroughBehavior">passthrough_behavior</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#passthrough_behavior Apigatewayv2Integration#passthrough_behavior}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.payloadFormatVersion">payload_format_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#payload_format_version Apigatewayv2Integration#payload_format_version}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.requestParameters">request_parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#request_parameters Apigatewayv2Integration#request_parameters}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.requestTemplates">request_templates</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#request_templates Apigatewayv2Integration#request_templates}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.responseParameters">response_parameters</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters">Apigatewayv2IntegrationResponseParameters</a>]]</code> | response_parameters block. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.templateSelectionExpression">template_selection_expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#template_selection_expression Apigatewayv2Integration#template_selection_expression}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.timeoutMilliseconds">timeout_milliseconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#timeout_milliseconds Apigatewayv2Integration#timeout_milliseconds}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.tlsConfig">tls_config</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig">Apigatewayv2IntegrationTlsConfig</a></code> | tls_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_id`<sup>Required</sup> <a name="api_id" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.apiId"></a>

```python
api_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#api_id Apigatewayv2Integration#api_id}.

---

##### `integration_type`<sup>Required</sup> <a name="integration_type" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.integrationType"></a>

```python
integration_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#integration_type Apigatewayv2Integration#integration_type}.

---

##### `connection_id`<sup>Optional</sup> <a name="connection_id" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#connection_id Apigatewayv2Integration#connection_id}.

---

##### `connection_type`<sup>Optional</sup> <a name="connection_type" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.connectionType"></a>

```python
connection_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#connection_type Apigatewayv2Integration#connection_type}.

---

##### `content_handling_strategy`<sup>Optional</sup> <a name="content_handling_strategy" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.contentHandlingStrategy"></a>

```python
content_handling_strategy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#content_handling_strategy Apigatewayv2Integration#content_handling_strategy}.

---

##### `credentials_arn`<sup>Optional</sup> <a name="credentials_arn" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.credentialsArn"></a>

```python
credentials_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#credentials_arn Apigatewayv2Integration#credentials_arn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#description Apigatewayv2Integration#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#id Apigatewayv2Integration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integration_method`<sup>Optional</sup> <a name="integration_method" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.integrationMethod"></a>

```python
integration_method: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#integration_method Apigatewayv2Integration#integration_method}.

---

##### `integration_subtype`<sup>Optional</sup> <a name="integration_subtype" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.integrationSubtype"></a>

```python
integration_subtype: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#integration_subtype Apigatewayv2Integration#integration_subtype}.

---

##### `integration_uri`<sup>Optional</sup> <a name="integration_uri" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.integrationUri"></a>

```python
integration_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#integration_uri Apigatewayv2Integration#integration_uri}.

---

##### `passthrough_behavior`<sup>Optional</sup> <a name="passthrough_behavior" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.passthroughBehavior"></a>

```python
passthrough_behavior: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#passthrough_behavior Apigatewayv2Integration#passthrough_behavior}.

---

##### `payload_format_version`<sup>Optional</sup> <a name="payload_format_version" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.payloadFormatVersion"></a>

```python
payload_format_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#payload_format_version Apigatewayv2Integration#payload_format_version}.

---

##### `request_parameters`<sup>Optional</sup> <a name="request_parameters" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.requestParameters"></a>

```python
request_parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#request_parameters Apigatewayv2Integration#request_parameters}.

---

##### `request_templates`<sup>Optional</sup> <a name="request_templates" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.requestTemplates"></a>

```python
request_templates: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#request_templates Apigatewayv2Integration#request_templates}.

---

##### `response_parameters`<sup>Optional</sup> <a name="response_parameters" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.responseParameters"></a>

```python
response_parameters: typing.Union[IResolvable, typing.List[Apigatewayv2IntegrationResponseParameters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters">Apigatewayv2IntegrationResponseParameters</a>]]

response_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#response_parameters Apigatewayv2Integration#response_parameters}

---

##### `template_selection_expression`<sup>Optional</sup> <a name="template_selection_expression" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.templateSelectionExpression"></a>

```python
template_selection_expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#template_selection_expression Apigatewayv2Integration#template_selection_expression}.

---

##### `timeout_milliseconds`<sup>Optional</sup> <a name="timeout_milliseconds" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.timeoutMilliseconds"></a>

```python
timeout_milliseconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#timeout_milliseconds Apigatewayv2Integration#timeout_milliseconds}.

---

##### `tls_config`<sup>Optional</sup> <a name="tls_config" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationConfig.property.tlsConfig"></a>

```python
tls_config: Apigatewayv2IntegrationTlsConfig
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig">Apigatewayv2IntegrationTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#tls_config Apigatewayv2Integration#tls_config}

---

### Apigatewayv2IntegrationResponseParameters <a name="Apigatewayv2IntegrationResponseParameters" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import apigatewayv2_integration

apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters(
  mappings: typing.Mapping[str],
  status_code: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters.property.mappings">mappings</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#mappings Apigatewayv2Integration#mappings}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters.property.statusCode">status_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#status_code Apigatewayv2Integration#status_code}. |

---

##### `mappings`<sup>Required</sup> <a name="mappings" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters.property.mappings"></a>

```python
mappings: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#mappings Apigatewayv2Integration#mappings}.

---

##### `status_code`<sup>Required</sup> <a name="status_code" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters.property.statusCode"></a>

```python
status_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#status_code Apigatewayv2Integration#status_code}.

---

### Apigatewayv2IntegrationTlsConfig <a name="Apigatewayv2IntegrationTlsConfig" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import apigatewayv2_integration

apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig(
  server_name_to_verify: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig.property.serverNameToVerify">server_name_to_verify</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#server_name_to_verify Apigatewayv2Integration#server_name_to_verify}. |

---

##### `server_name_to_verify`<sup>Optional</sup> <a name="server_name_to_verify" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig.property.serverNameToVerify"></a>

```python
server_name_to_verify: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_integration#server_name_to_verify Apigatewayv2Integration#server_name_to_verify}.

---

## Classes <a name="Classes" id="Classes"></a>

### Apigatewayv2IntegrationResponseParametersList <a name="Apigatewayv2IntegrationResponseParametersList" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import apigatewayv2_integration

apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Apigatewayv2IntegrationResponseParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters">Apigatewayv2IntegrationResponseParameters</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[Apigatewayv2IntegrationResponseParameters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters">Apigatewayv2IntegrationResponseParameters</a>]]

---


### Apigatewayv2IntegrationResponseParametersOutputReference <a name="Apigatewayv2IntegrationResponseParametersOutputReference" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import apigatewayv2_integration

apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.mappingsInput">mappings_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.statusCodeInput">status_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.mappings">mappings</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.statusCode">status_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters">Apigatewayv2IntegrationResponseParameters</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mappings_input`<sup>Optional</sup> <a name="mappings_input" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.mappingsInput"></a>

```python
mappings_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `status_code_input`<sup>Optional</sup> <a name="status_code_input" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.statusCodeInput"></a>

```python
status_code_input: str
```

- *Type:* str

---

##### `mappings`<sup>Required</sup> <a name="mappings" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.mappings"></a>

```python
mappings: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `status_code`<sup>Required</sup> <a name="status_code" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.statusCode"></a>

```python
status_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParametersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[Apigatewayv2IntegrationResponseParameters, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationResponseParameters">Apigatewayv2IntegrationResponseParameters</a>, cdktf.IResolvable]

---


### Apigatewayv2IntegrationTlsConfigOutputReference <a name="Apigatewayv2IntegrationTlsConfigOutputReference" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import apigatewayv2_integration

apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.resetServerNameToVerify">reset_server_name_to_verify</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_server_name_to_verify` <a name="reset_server_name_to_verify" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.resetServerNameToVerify"></a>

```python
def reset_server_name_to_verify() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.property.serverNameToVerifyInput">server_name_to_verify_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.property.serverNameToVerify">server_name_to_verify</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig">Apigatewayv2IntegrationTlsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `server_name_to_verify_input`<sup>Optional</sup> <a name="server_name_to_verify_input" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.property.serverNameToVerifyInput"></a>

```python
server_name_to_verify_input: str
```

- *Type:* str

---

##### `server_name_to_verify`<sup>Required</sup> <a name="server_name_to_verify" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.property.serverNameToVerify"></a>

```python
server_name_to_verify: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfigOutputReference.property.internalValue"></a>

```python
internal_value: Apigatewayv2IntegrationTlsConfig
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2Integration.Apigatewayv2IntegrationTlsConfig">Apigatewayv2IntegrationTlsConfig</a>

---



